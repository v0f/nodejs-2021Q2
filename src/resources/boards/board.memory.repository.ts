import _ from 'lodash'
import { db } from '../../common/db'
import Board from './board.model'

const getAll = async (): Promise<Board[]> => db.Boards;

const get = async (id: string): Promise<Board | undefined> => {
  const board = _.find(db.Boards, ['id', id]);
  return board;
};

const put = async (id: string, putData: Board): Promise<Board | undefined> => {
  const board = _.find(db.Boards, ['id', id]);
  _.assign(board, putData);
  return board;
};

const post = async (postData: Board): Promise<Board> => {
  const board = new Board(postData);
  db.Boards.push(board);
  return board;
};

const boardDelete = async (id: string): Promise<string | undefined> => {
  const [deletedBoard] = _.remove(db.Boards, e => e.id === id);
  return deletedBoard ? deletedBoard.id : '';
};

export default { getAll, get, post, put, boardDelete };
