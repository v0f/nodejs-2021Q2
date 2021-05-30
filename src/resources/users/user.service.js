const usersRepo = require('./user.memory.repository');
const tasksRepo = require('../tasks/task.memory.repository');

/**
 * Return all users
 * @return {Promise<User[]>} - array of tasks
 */
const getAll = () => usersRepo.getAll();

/**
 * Return user by id
 * @param {string} id - task id
 * @return {Promise<User>}
 */
const get = id => usersRepo.get(id);

/**
 * Create user
 * @param postData
 * @return {Promise<User>}
 * Return new user
 */
const post = postData => usersRepo.post(postData);

/**
 * Update user
 * @param {string} id - task id
 * @param putData
 * @return {Promise<User>}
 * Return new user
 */
const put = (id, putData) => usersRepo.put(id, putData);

/**
 * Delete user
 * @async
 * @param id {string} - user id
 * @return {void}
 */
const userDelete = async id => {
  await usersRepo.userDelete(id);
  await tasksRepo.unassignUserTasks(id);
};

module.exports = { getAll, get, post, put, userDelete };
