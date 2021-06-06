import _ from 'lodash'
import { db } from '../../common/db'
import Task from './task.model'

const getAll = async (): Promise<Task[]> => db.Tasks;

const get = async (id: string): Promise<Task | undefined> => {
  const task = _.find(db.Tasks, ['id', id]);
  return task;
};

const put = async (id: string, putData: Task): Promise<Task | undefined> => {
  const task = _.find(db.Tasks, ['id', id]);
  _.assign(task, putData);
  return task;
};

const post = async (postData: Task): Promise<Task> => {
  const task = new Task(postData);
  db.Tasks.push(task);
  return task;
};

const taskDelete = async (id: string): Promise<string | undefined> => {
  const [deletedTask] = _.remove(db.Tasks, e => e.id === id);
  return deletedTask ? deletedTask.id : '';
};

const unassignUserTasks = async (userId: string): Promise<void> => {
  const userTasks = _.filter(db.Tasks, ['userId', userId]);
  userTasks.map(t => _.assign(t, { userId: null }));
};

const deleteTasksByBoard = async (boardId: string): Promise<Task[]> => (
  _.remove(db.Tasks, t => t.boardId === boardId)
);

export default {
  getAll,
  get,
  post,
  put,
  taskDelete,
  unassignUserTasks,
  deleteTasksByBoard
};
