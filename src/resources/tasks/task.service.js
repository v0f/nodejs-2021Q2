const tasksRepo = require('./task.memory.repository');

/**
 * Return all Tasks
 * @return {Promise<Task[]>} - array of tasks
 */
const getAll = () => tasksRepo.getAll();

/**
 * Return task by id
 * @param {string} id - task id
 * @return {Promise<Task>}
 */
const get = id => tasksRepo.get(id);

/**
 * Create task
 * @param postData
 * @return {Promise<Task>}
 * Return new task
 */
const post = postData => tasksRepo.post(postData);

/**
 * Update task
 * @param {string} id - task id
 * @param putData
 * @return {Promise<Task>}
 * Return new task
 */
const put = (id, putData) => tasksRepo.put(id, putData);

/**
 * Delete task
 * @async
 * @param id {string} - board id
 * @return {Promise<string>} - deleted board id
 */
const taskDelete = id => tasksRepo.taskDelete(id);

module.exports = { getAll, get, post, put, taskDelete };
