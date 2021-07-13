import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly tasksRepository: Repository<Task>,
  ) {}

  create(createTaskDto: CreateTaskDto) {
    const task = this.tasksRepository.create(createTaskDto);
    return this.tasksRepository.save(task);
  }

  findAll() {
    return this.tasksRepository.find();
  }

  findOne(id: string) {
    return this.tasksRepository.findOne(id);
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    let task = await this.tasksRepository.findOne(id);
    if (task) {
      this.tasksRepository.merge(task, updateTaskDto);
      task = await this.tasksRepository.save(task);
    }
    return task;
  }

  remove(id: string) {
    return this.tasksRepository.delete(id);
  }

  async unassignUserTasks(userId: string) {
    await this.tasksRepository
      .createQueryBuilder()
      .update()
      .set({ userId: null })
      .where('userId = :userId', { userId })
      .execute();
  }

  async deleteTasksByBoard(boardId: string) {
    const tasks = await this.tasksRepository.find({ boardId });
    return this.tasksRepository.remove(tasks);
  }
}
