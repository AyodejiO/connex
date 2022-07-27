import { DigitalTime } from "./types";

const formatDuration = ({ minutes, seconds }: DigitalTime) => {
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `00 : ${formattedMinutes} : ${formattedSeconds}`;
}

export default formatDuration;