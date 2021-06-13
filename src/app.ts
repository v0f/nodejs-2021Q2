import express, { ErrorRequestHandler } from 'express'
import swaggerUI from 'swagger-ui-express'
import path from 'path'
import YAML from 'yamljs'
import userRouter from './resources/users/user.router'
import boardRouter from './resources/boards/board.router'
import taskRouter from './resources/tasks/task.router'
import { requestLogger, logger } from './common/logger'

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use(requestLogger);

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter);
app.use('/boards', boardRouter);
boardRouter.use('/:boardId/tasks', taskRouter);

// error handlers
const errHandler: ErrorRequestHandler = (error: Error, _req, res, next) => {
  logger.error(`500: Internal server error.${error.message}`);
  res.status(500).send('Internal server error');
  next();
}
app.use(errHandler);

process.on('uncaughtException', error => {
  logger.error(`uncaughtException: ${error.message}`);
  setTimeout(() => process.exit(1), 100);
});

process.on('unhandledRejection', (reason: { message?: string }) => {
  logger.error(`unhandledRejection: ${reason.message}`);
  setTimeout(() => process.exit(1), 100);
});

// uncaughtException
// throw Error('Oops!'); // *** uncomment for cross-check ***
// unhandledRejection
// Promise.reject(Error('Oops!')); // *** uncomment for cross-check ***

export default app;
