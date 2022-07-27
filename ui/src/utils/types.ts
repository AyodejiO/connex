export type Time = {
  epoch: number;
  error?: Error;
};

export type DigitalTime = {
  hour: number
  minutes: number;
  seconds: number;
}

export type Error = {
  message: string | null;
};