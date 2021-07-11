import config from './config';
import { ConnectionOptions } from 'typeorm';
import { User } from '../resources/users/entities/user.entity';
import { Task } from '../resources/tasks/entities/task.entity';
import { Board } from '../resources/boards/entities/board.entity';

const {
  POSTGRES_HOSTNAME,
  POSTGRES_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
} = config;

const ormconfig: ConnectionOptions = {
  type: 'postgres',
  host: POSTGRES_HOSTNAME,
  port: Number(POSTGRES_PORT),
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  // synchronize: true,
  entities: [User, Task, Board],
  migrations: ['dist/migration/*.js'],
  migrationsRun: true,
  cli: {
    migrationsDir: 'src/migration',
  },
};

export default ormconfig;
