import { createLogger, format, transports } from 'winston';

const { combine, timestamp, printf } = format;

const customFormat = printf(({ level, message, timestamp }) => {
  return `[${level}] ${timestamp} ${message}`;
});

const DevLogger = () => {
  return createLogger({
    level: 'debug',
    format: combine(
      timestamp({ format: 'HH:MM:A - MMM/DD/YYYY' }),
      customFormat
    ),
    transports: [
      new transports.File({ filename: 'error.log', level: 'error' }),
      new transports.File({ filename: 'combined.log' }),
      new transports.Console(),
    ],
  });
};

export default DevLogger;
