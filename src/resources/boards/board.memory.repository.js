const _ = require('lodash');
const db = require('../../common/db');
const Board = require('./board.model');

const getAll = async () => db.Boards;

const get = async id => {
  const board = _.find(db.Boards, ['id', id]);
  return board;
};

const put = async (id, putData) => {
  const board = _.find(db.Boards, ['id', id]);
  _.assign(board, putData);
  return board;
};

const post = async postData => {
  const board = new Board(postData);
  db.Boards.push(board);
  return board;
};

const boardDelete = async id => {
  const [deletedBoard] = _.remove(db.Boards, e => e.id === id);
  return deletedBoard ? deletedBoard.id : '';
};

module.exports = { getAll, get, post, put, boardDelete };
