const boardsRepo = require('./board.memory.repository');
const tasksRepo = require('../tasks/task.memory.repository');

/**
 * Return array of boards
 * @return {Promise<Board[]>} - promise, array of boards
 */
const getAll = () => boardsRepo.getAll();

/**
 * Return board by id
 * @param {string} id - board id
 * @return {Promise<Board>}
 */
const get = id => boardsRepo.get(id);

/**
 * Create board
 * @param board
 * @return {Promise<Board>}
 * Return new board
 */
const post = postData => boardsRepo.post(postData);

/**
 * Update board
 * @param {string} id - board id
 * @param board - board data
 * @return {Promise<Board>}
 */
const put = (id, putData) => boardsRepo.put(id, putData);

/**
 * Delete board with board's tasks
 * @async
 * @param id {string} - board id
 * @return {Promise<string>} - deleted board id
 */
const boardDelete = async id => {
  const deletedBoardId = await boardsRepo.boardDelete(id);
  if (deletedBoardId) {
    await tasksRepo.deleteTasksByBoard(deletedBoardId);
  }
  return deletedBoardId;
};

module.exports = { getAll, get, post, put, boardDelete };
