import { getRepository } from "typeorm";
import Task from './task.model';

const taskRepository = () => getRepository(Task);

const getAll = async (): Promise<Task[]> => taskRepository().find();

const get = async (id: string): Promise<Task | undefined> => {
  const task = await taskRepository().findOne(id);
  return task;
};

const put = async (id: string, putData: Task): Promise<Task | undefined> => {
  let task = await taskRepository().findOne(id);
  if (task) {
    taskRepository().merge(task, putData);
    task = await taskRepository().save(task);
  }
  return task;
};

const post = async (postData: Task): Promise<Task> => {
  let task = taskRepository().create(postData);
  task = await taskRepository().save(task);
  return task;
};

const taskDelete = async (id: string): Promise<string | undefined> => {
  const task = await taskRepository().findOne(id);
  if (task) {
    await taskRepository().remove(task);
    return id;
  }
  return undefined;
};

const unassignUserTasks = async (userId: string): Promise<void> => {
  await taskRepository().createQueryBuilder().update()
    .set({ userId: null }).where("userId = :userId", { userId })
    .execute();
};

const deleteTasksByBoard = async (boardId: string): Promise<Task[]> => {
  const tasks = await taskRepository().find({ boardId });
  return taskRepository().remove(tasks);
};

export default {
  getAll,
  get,
  post,
  put,
  taskDelete,
  unassignUserTasks,
  deleteTasksByBoard
};
