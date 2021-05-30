const { v4: uuid } = require('uuid');

/**
 * @typedef Board
 * @type {object}
 * @property {string} id - board id
 * @property {string} title - board title
 * @property {object[]} columns - array of columns
 */

/**
 * Board
 * @class Board
 */
class Board {
  /**
   * new board
   * @param {string} [id=uuid] - board id
   * @param {string} [title=Board1] - board title
   * @param {object[]} [columns=[]] - columns
   */
  constructor({ id = uuid(), title = 'Board1', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

module.exports = Board;
