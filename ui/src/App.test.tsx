import React from 'react';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import App from './App';

const mockedAxios = axios as jest.Mocked<typeof axios>;

const setup = () => {
  const utils = render(<App /> );

  mockedAxios.get.mockImplementation(() => Promise.resolve({
    data: {
      epoch: 1000
    }
  }))

  mockedAxios.get.mockImplementationOnce(() => Promise.resolve({
    status: 200,
      data: {
          name: 'Rony',
          email: 'rony@example.com'
      }
  }))

  mockedAxios.all.mockResolvedValue([
    { data: { time: { epoch: Date.now() } } },
    { data: 'metrics' },
  ]);

  // const mockAxiosSpreadResult = jest.fn(() => [
  //   { data: { time: { epoch: Date.now() } } },
  //   { data: 'metrics' },
  // ]);

  // mockedAxios.spread.mockReturnValue(mockAxiosSpreadResult);

  return {
    ...utils,
  }
}

test('renders main page', () => {
  setup();
  expect(axios.get).toHaveBeenCalledTimes(1);
  expect(axios.get).toHaveBeenCalledWith('time');
  const linkElement = screen.getByText(/Sam's assessment/i);
  expect(linkElement).toBeInTheDocument();
});
