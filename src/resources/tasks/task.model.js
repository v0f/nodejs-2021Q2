const { v4: uuid } = require('uuid');

/**
 * @typedef Task
 * @type {object}
 * @property {string} id - task id
 * @property {string} title - task title
 * @property {number} order - task order
 * @property {string} description - task description
 * @property {string} userId - user id
 * @property {string} boardId - board id
 * @property {string} columnId - column id
 */

/**
 * Task
 * @class Task
 */
class Task {
  /**
   * @param {string} [id=uuid()] - an ID task
   * @param {string} [title='Task1'] - title
   * @param {number} [order=1] - order task on the column
   * @param {string} [description='task'] - description of task
   * @param {string} [userId] - user id
   * @param {string} [boardId] - board id
   * @param {string} [columnId] - column id
   */
  constructor({
    id = uuid(),
    title = 'Task1',
    order = 1,
    description = 'task',
    userId,
    boardId,
    columnId
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}

module.exports = Task;
