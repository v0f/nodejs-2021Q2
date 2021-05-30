const { v4: uuid } = require('uuid');

/**
 * @typedef User
 * @type {object}
 * @property {string} id - user id
 * @property {string} name - user name
 * @property {string} login - user login
 * @property {string} password - user password
 */

/**
 * User
 * @class User
 */
class User {
  /**
   * @param {string} id - user id
   * @param {string} name - user name
   * @param {string} login - user login
   * @param {string} password - user password
   */
  constructor({
    id = uuid(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  /**
   * transform user data
   * @param user
   * @return {object}
   */
  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

module.exports = User;
