import { v4 as uuid } from 'uuid'

class Board {
  id?: string

  title?: string

  columns?: string[]

  constructor({ id = uuid(), title = 'Board1', columns = [] as string[] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

export default Board;
