import { v4 as uuid } from 'uuid'

class Task {
  id?: string

  title?: string

  order?: number

  description?: string

  userId?: string

  boardId?: string

  columnId?: string

  constructor({
    id = uuid(),
    title = 'Task1',
    order = 1,
    description = 'task',
    userId = '',
    boardId = '',
    columnId = ''
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

export default Task;
