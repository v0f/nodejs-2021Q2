const _ = require('lodash');
const db = require('../../common/db');
const User = require('./user.model');

/**
 * Return all users
 * @return {Promise<User[]>} - array of tasks
 */
const getAll = async () => db.Users;

/**
 * Return user by id
 * @param {string} id - task id
 * @return {Promise<User>}
 */
const get = async id => {
  const user = _.find(db.Users, ['id', id]);
  return _.omit(user, 'password');
};

/**
 * Update user
 * @param {string} id - task id
 * @param putData
 * @return {Promise<User>}
 * Return new user
 */
const put = async (id, putData) => {
  const user = _.find(db.Users, ['id', id]);
  _.assign(user, putData);
  return _.omit(user, 'password');
};

/**
 * Create user
 * @param postData
 * @return {Promise<User>}
 * Return new user
 */
const post = async postData => {
  const user = new User(postData);
  db.Users.push(user);
  return _.omit(user, 'password');
};

/**
 * Delete user
 * @async
 * @param id {string} - user id
 * @return {void}
 */
const userDelete = async id => (
  _.remove(db.Users, e => e.id === id)
);

module.exports = { getAll, get, post, put, userDelete };
