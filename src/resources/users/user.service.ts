import usersRepo from './user.repository'
import tasksRepo from '../tasks/task.repository'
import { User, UserProfile } from './user.model';

const getAll = (): Promise<User[]> => usersRepo.getAll();

const get = (id: string): Promise<User | undefined> => usersRepo.get(id);

const getByLogin = (login: string): Promise<User | undefined> => usersRepo.getByLogin(login);

const post = (postData: User): Promise<UserProfile> => usersRepo.post(postData);

const put = (id: string, putData: User): Promise<UserProfile> => usersRepo.put(id, putData);

const userDelete = async (id: string): Promise<void> => {
  await usersRepo.userDelete(id);
  await tasksRepo.unassignUserTasks(id);
};

export default { getAll, get, getByLogin, post, put, userDelete };
