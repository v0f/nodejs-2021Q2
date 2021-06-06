import _ from 'lodash'
import { db } from '../../common/db'
import User from './user.model'

const getAll = async (): Promise<User[]> => db.Users;

const get = async (id: string): Promise<User> => {
  const user = _.find<User>(db.Users, ['id', id]);
  return _.omit(user, 'password');
};

const put = async (id: string, putData: User): Promise<User> => {
  const user = _.find(db.Users, ['id', id]);
  _.assign(user, putData);
  return _.omit(user, 'password');
};

const post = async (postData: User): Promise<User> => {
  const user = new User(postData);
  db.Users.push(user);
  return _.omit(user, 'password');
};

const userDelete = async (id: string): Promise<void> => {
  _.remove(db.Users, e => e.id === id)
};

export default { getAll, get, post, put, userDelete };
