const boardsRepo = require('./board.memory.repository');
const tasksRepo = require('../tasks/task.memory.repository');

const getAll = () => boardsRepo.getAll();
const get = id => boardsRepo.get(id);
const post = postData => boardsRepo.post(postData);
const put = (id, putData) => boardsRepo.put(id, putData);

const boardDelete = async id => {
  const deletedBoardId = await boardsRepo.boardDelete(id);
  if (deletedBoardId) {
    await tasksRepo.deleteTasksByBoard(deletedBoardId);
  }
  return deletedBoardId;
};

module.exports = { getAll, get, post, put, boardDelete };
