import tasksRepo from './task.memory.repository'
import Task from './task.model';

const getAll = (): Promise<Task[]> => tasksRepo.getAll();

const get = (id: string): Promise<Task | undefined> => tasksRepo.get(id);

const post = (postData: Task): Promise<Task> => tasksRepo.post(postData);

const put = (id: string, putData: Task): Promise<Task | undefined> => tasksRepo.put(id, putData);

const taskDelete = (id: string): Promise<string | undefined> => tasksRepo.taskDelete(id);

export default { getAll, get, post, put, taskDelete };
