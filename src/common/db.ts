import User from '../resources/users/user.model'
import Task from '../resources/tasks/task.model'
import Board from '../resources/boards/board.model'

export const db = {
  Users: [] as User[],
  Boards: [] as Board[],
  Tasks: [] as Task[]
};
