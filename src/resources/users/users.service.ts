import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { TasksService } from '../tasks/tasks.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly tasksService: TasksService,
  ) {}

  create(createUserDto: CreateUserDto) {
    const user = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(user);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: string) {
    return this.usersRepository.findOne(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    let user = await this.usersRepository.findOne(id);
    if (user) {
      this.usersRepository.merge(user, updateUserDto);
      user = await this.usersRepository.save(user);
    }
    return user;
  }

  async remove(id: string) {
    await this.usersRepository.delete(id);
    await this.tasksService.unassignUserTasks(id);
  }

  findByLogin(login: string) {
    return this.usersRepository.findOne(
      { login },
      { select: ['login', 'password'] },
    );
  }

  async createAdmin() {
    const admin = await this.findByLogin('admin');
    if (admin) return;
    this.create({
      name: 'admin',
      login: 'admin',
      password: 'admin',
    });
  }
}
