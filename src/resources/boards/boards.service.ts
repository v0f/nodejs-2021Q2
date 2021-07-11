import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entities/board.entity';
import { TasksService } from '../tasks/tasks.service';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board)
    private readonly boardsRepository: Repository<Board>,
    private readonly tasksService: TasksService,
  ) {}

  create(createBoardDto: CreateBoardDto) {
    const board = this.boardsRepository.create(createBoardDto);
    return this.boardsRepository.save(board);
  }

  findAll() {
    return this.boardsRepository.find();
  }

  findOne(id: string) {
    return this.boardsRepository.findOne(id);
  }

  async update(id: string, updateBoardDto: UpdateBoardDto) {
    let board = await this.boardsRepository.findOne(id);
    if (board) {
      this.boardsRepository.merge(board, updateBoardDto);
      board = await this.boardsRepository.save(board);
    }
    return board;
  }

  async remove(id: string) {
    await this.boardsRepository.delete(id);
    await this.tasksService.deleteTasksByBoard(id);
  }
}
