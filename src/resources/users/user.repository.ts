import _ from 'lodash';
import { getRepository } from "typeorm";
import { User, UserProfile } from './user.model';

const userRepository = () => getRepository(User);

const getAll = async (): Promise<User[]> => userRepository().find();

const get = async (id: string): Promise<UserProfile> => {
  const user = await userRepository().findOne(id);
  return _.omit(user, 'password');
};

const put = async (id: string, putData: User): Promise<UserProfile> => {
  let user = await userRepository().findOne(id);
  if (user) {
    userRepository().merge(user, putData);
    user = await userRepository().save(user);
  }
  return _.omit(user, 'password');
};

const post = async (postData: User): Promise<UserProfile> => {
  let user = userRepository().create(postData);
  user = await userRepository().save(user);
  return _.omit(user, 'password');
};

const userDelete = async (id: string): Promise<void> => {
  const user = await userRepository().findOne(id);
  if (user) userRepository().remove(user);
};

export default { getAll, get, post, put, userDelete };
