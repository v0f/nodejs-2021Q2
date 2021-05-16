const _ = require('lodash');
const db = require('../../common/db');
const Task = require('./task.model');

const getAll = async () => db.Tasks;

const get = async id => {
  const task = _.find(db.Tasks, ['id', id]);
  return task;
};

const put = async (id, putData) => {
  const task = _.find(db.Tasks, ['id', id]);
  _.assign(task, putData);
  return task;
};

const post = async postData => {
  const task = new Task(postData);
  db.Tasks.push(task);
  return task;
};

const taskDelete = async id => {
  const [deletedTask] = _.remove(db.Tasks, e => e.id === id);
  return deletedTask ? deletedTask.id : '';
};

const unassignUserTasks = async userId => {
  const userTasks = _.filter(db.Tasks, ['userId', userId]);
  userTasks.map(t => _.assign(t, { userId: null }));
};

const deleteTasksByBoard = async boardId => (
  _.remove(db.Tasks, t => t.boardId === boardId)
);

module.exports = {
  getAll,
  get,
  post,
  put,
  taskDelete,
  unassignUserTasks,
  deleteTasksByBoard
};
