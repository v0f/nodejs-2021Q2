const tasksRepo = require('./task.memory.repository');

const getAll = () => tasksRepo.getAll();
const get = id => tasksRepo.get(id);
const post = postData => tasksRepo.post(postData);
const put = (id, putData) => tasksRepo.put(id, putData);
const taskDelete = id => tasksRepo.taskDelete(id);

module.exports = { getAll, get, post, put, taskDelete };
