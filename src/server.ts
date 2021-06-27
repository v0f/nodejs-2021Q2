import "reflect-metadata";
import { createConnection } from "typeorm";
import { PORT } from './common/config';
import ormconfig from "./common/ormconfig";
import app from './app';
import { logger } from './common/logger'

createConnection(ormconfig).then(() => {
  app.listen(PORT, () =>
    logger.info(`App is running on http://localhost:${PORT}`)
  )
}).catch(error => logger.error(error));
