import usersRepo from './user.memory.repository'
import tasksRepo from '../tasks/task.memory.repository'
import User from './user.model'

const getAll = (): Promise<User[]> => usersRepo.getAll();

const get = (id: string): Promise<User> => usersRepo.get(id);

const post = (postData: User): Promise<User> => usersRepo.post(postData);

const put = (id: string, putData: User): Promise<User> => usersRepo.put(id, putData);

const userDelete = async (id: string): Promise<void> => {
  await usersRepo.userDelete(id);
  await tasksRepo.unassignUserTasks(id);
};

export default { getAll, get, post, put, userDelete };
