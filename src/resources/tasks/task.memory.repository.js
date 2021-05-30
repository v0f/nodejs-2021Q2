const _ = require('lodash');
const db = require('../../common/db');
const Task = require('./task.model');

/**
 * Return all Tasks
 * @return {Promise<Task[]>} - array of tasks
 */
const getAll = async () => db.Tasks;

/**
 * Return task by id
 * @param {string} id - task id
 * @return {Promise<Task>}
 */
const get = async id => {
  const task = _.find(db.Tasks, ['id', id]);
  return task;
};

/**
 * Update task
 * @param {string} id - task id
 * @param putData
 * @return {Promise<Task>}
 * Return new task
 */
const put = async (id, putData) => {
  const task = _.find(db.Tasks, ['id', id]);
  _.assign(task, putData);
  return task;
};

/**
 * Create task
 * @param postData
 * @return {Promise<Task>}
 * Return new task
 */
const post = async postData => {
  const task = new Task(postData);
  db.Tasks.push(task);
  return task;
};

/**
 * Delete task
 * @async
 * @param id {string} - board id
 * @return {Promise<string>} - deleted board id
 */
const taskDelete = async id => {
  const [deletedTask] = _.remove(db.Tasks, e => e.id === id);
  return deletedTask ? deletedTask.id : '';
};

/**
 * Delete user from tasks
 * @param {string} userId - user id
 * @return {void}
 */
const unassignUserTasks = async userId => {
  const userTasks = _.filter(db.Tasks, ['userId', userId]);
  userTasks.map(t => _.assign(t, { userId: null }));
};

/**
 * Delete tasks by board
 * @param {string} boardId - board id
 * @return {void}
 */
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
