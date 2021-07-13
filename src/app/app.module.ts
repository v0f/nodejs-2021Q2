import { Module } from '@nestjs/common';
// import { RouterModule } from '@nestjs/core';
// import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from '../resources/users/users.module';
import { TasksModule } from '../resources/tasks/tasks.module';
import { BoardsModule } from '../resources/boards/boards.module';
import ormconfig from '../config/ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useFactory: () => ormconfig }),
    UsersModule,
    TasksModule,
    BoardsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
