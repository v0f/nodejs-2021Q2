import { getRepository } from "typeorm";
import Board from './board.model'

const repository = () => getRepository(Board);

const getAll = async (): Promise<Board[]> => repository().find();

const get = async (id: string): Promise<Board | undefined> => {
  const board = await repository().findOne(id);
  return board;
};

const put = async (id: string, putData: Board): Promise<Board | undefined> => {
  let board = await repository().findOne(id);
  if (board) {
    repository().merge(board, putData);
    board = await repository().save(board);
  }
  return board;
};

const post = async (postData: Board): Promise<Board> => {
  let board = repository().create(postData);
  board = await repository().save(board);
  return board;
};

const boardDelete = async (id: string): Promise<string | undefined> => {
  const board = await repository().findOne(id);
  if (board) {
    await repository().remove(board);
    return id;
  }
  return undefined;
};

export default { getAll, get, post, put, boardDelete };
