import React from 'react';
import formatDuration from '../utils/formatDuration';
import { Time, DigitalTime } from '../utils/types';

const getElaspedTime = (epoch: number): DigitalTime  => {
  let endTime = (new Date()).getTime();
  let timeDiff = (endTime - epoch) / 1000;

  let seconds = Math.floor(timeDiff % 60);

  timeDiff = Math.floor(timeDiff / 60);
  let minutes = timeDiff % 60;

  timeDiff = Math.floor(timeDiff / 60);
  let hour = timeDiff % 24;

  return {
    hour: hour,
    seconds: seconds,
    minutes: minutes,
  }
}

function TimeComponent( { epoch }: Time) {
  const [displayTime, setDisplayTime] = React.useState("");

  if (epoch > 0) {
    setInterval(() => {
      setDisplayTime(formatDuration(getElaspedTime(epoch)));
    }, 1000);
  }

  return (
    <div className="grid-item epoch">
      <h4>Refreshes in 30s...</h4>
      <h1>{ displayTime }</h1>
    </div>
  );
}

export default TimeComponent;