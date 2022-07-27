import React from 'react';
import TimeComponent from './components/TimeComponent';
import MetricsComponent from './components/MetricsComponent';
import './App.css';
import apiClient from './utils/apiClient';
import axios from 'axios';
import { Time } from './utils/types';


type TimeResponse = {
  data: Time;
}

type MetricsResponse = {
  data: string;
}

type ServerResponse = {
  time: Time;
  metrics: string;
  error? : Error;
}

async function getData(): Promise<ServerResponse> {
  let timeReq = await apiClient.get<TimeResponse>('time');
  let metricsReq = await apiClient.get<MetricsResponse>('metrics');

  let response = {
  }

  await axios.all([timeReq, metricsReq]).then(axios.spread((...responses) => {
    response = {
      time: responses[0].data,
      metrics: responses[1].data,
    }

    console.log(response);
    return response;
  })).catch(errors => {
    response = {
      error: "Something went wrong"
    }
  })

  return response as ServerResponse;
}

function App() {

  const [serverEpoch, setServerEpoch] = React.useState(0);
  const [serverError, setServerError] = React.useState("");
  const [serverMetrics, setServerMetrics] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  async function getRequests() {
    setLoading(true);
    setServerEpoch(0);
    setServerMetrics("");

    const response = await getData();
    if (response.error) {
      setServerError("Something went wrong");
    } else {
      setServerEpoch(response.time.epoch);
      setServerMetrics(response.metrics);
    }
    setLoading(false);
  }

  React.useEffect(() => {
    getRequests();

    const interval = setInterval(() => {
      getRequests();
    }, 30000);
  
    return () => clearInterval(interval)

  }, []);

  return (
    <div className="App">
      <header>
        <h1>
          Sam's Assessment
        </h1>
      </header>
      {loading? <div className="container"><h1>Loading...</h1></div> :
        <div className="container">
          {serverError? serverError : 
            <div className="grid">
              {/* EPOCH HALF */}
              <div className="grid-item epoch">
                <TimeComponent epoch={serverEpoch} />
              </div>

              {/* METRICS HALF */}
              <div className="grid-item metrics">
                <MetricsComponent metrics={serverMetrics} />
              </div>
            </div>
          }
        </div>
      }
    </div>
  );
}

export default App;
