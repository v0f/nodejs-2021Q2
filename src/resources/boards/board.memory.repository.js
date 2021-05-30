const _ = require('lodash');
const db = require('../../common/db');
const Board = require('./board.model');

/**
 * Return all boards
 * @async
 * @returns {Promise<Board[]>} Promise Array of Boards
 */
const getAll = async () => db.Boards;

/**
 * Get Board by id
 * @async
 * @param {string} id - board id
 * @returns {Promise<Board>} Board
 */
const get = async id => {
  const board = _.find(db.Boards, ['id', id]);
  return board;
};

/**
 * Update Board
 * @param id {string} - Board id
 * @param putData {Board} - Board data
 * @return {Promise<Board>}
 */
const put = async (id, putData) => {
  const board = _.find(db.Boards, ['id', id]);
  _.assign(board, putData);
  return board;
};

/**
 * Create Board
 * @param postData {Board} - board data
 * @return {Promise<Board>}
 */
const post = async postData => {
  const board = new Board(postData);
  db.Boards.push(board);
  return board;
};

/**
 * Delete Board
 * @param id {string} - Board id
 * @return {Promise<string>}
 */
const boardDelete = async id => {
  const [deletedBoard] = _.remove(db.Boards, e => e.id === id);
  return deletedBoard ? deletedBoard.id : '';
};

module.exports = { getAll, get, post, put, boardDelete };
