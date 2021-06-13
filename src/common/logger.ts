import winston from 'winston'
import morgan from 'morgan'
import path from 'path'
import { Request } from 'express'

winston.configure({
  level: 'verbose',
  format: winston.format.combine(
    winston.format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
    winston.format.printf(
      (log) => `[${log['timestamp']}] ${log.level}: ${log.message}`
    )
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: path.resolve(__dirname, '../../logs/log.log')
    }),
    new winston.transports.File({
      level: 'error',
      filename: path.resolve(__dirname, '../../logs/error.log')
    })
  ],
  exitOnError: false
});

morgan.token('query', (req: Request) => JSON.stringify(req.query));
morgan.token('body', (req: Request) => JSON.stringify(req.body));

const requestLogger = morgan(
  ":method :url STATUS: :status PARAMS: :query BODY: :body",
  {
    stream: {
      write: (message) => winston.http(message)
    }
  }
);

export { requestLogger, winston as logger };
