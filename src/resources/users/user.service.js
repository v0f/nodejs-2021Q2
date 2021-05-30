const usersRepo = require('./user.memory.repository');
const tasksRepo = require('../tasks/task.memory.repository');

const getAll = () => usersRepo.getAll();
const get = id => usersRepo.get(id);
const post = postData => usersRepo.post(postData);
const put = (id, putData) => usersRepo.put(id, putData);

const userDelete = async id => {
  await usersRepo.userDelete(id);
  await tasksRepo.unassignUserTasks(id);
};

module.exports = { getAll, get, post, put, userDelete };
