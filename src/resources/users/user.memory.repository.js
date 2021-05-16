const _ = require('lodash');
const db = require('../../common/db');
const User = require('./user.model');

const getAll = async () => db.Users;

const get = async id => {
  const user = _.find(db.Users, ['id', id]);
  return _.omit(user, 'password');
};

const put = async (id, putData) => {
  const user = _.find(db.Users, ['id', id]);
  _.assign(user, putData);
  return _.omit(user, 'password');
};

const post = async postData => {
  const user = new User(postData);
  db.Users.push(user);
  return _.omit(user, 'password');
};

const userDelete = async id => {
  _.remove(db.Users, e => e.id === id);
};

module.exports = { getAll, get, post, put, userDelete };
