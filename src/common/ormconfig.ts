import dotenv from 'dotenv';
import path from 'path';
import { ConnectionOptions } from 'typeorm';
import User from '../resources/users/user.model';
import Task from '../resources/tasks/task.model';
import Board from '../resources/boards/board.model';

dotenv.config({
  path: path.join(__dirname, '../../.env')
});

const {
  POSTGRES_HOSTNAME,
  POSTGRES_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB
} = process.env;

const ormconfig: ConnectionOptions = {
  "type": "postgres",
  "host": POSTGRES_HOSTNAME,
  "port": Number(POSTGRES_PORT),
  "username": POSTGRES_USER,
  "password": POSTGRES_PASSWORD,
  "database": POSTGRES_DB,
  // "synchronize": true,
  "entities": [ User, Task, Board ],
  "migrations": ["build/migration/*.js"],
  "migrationsRun": true,
  "cli": {
    "migrationsDir": "src/migration"
  }
};

export default ormconfig;