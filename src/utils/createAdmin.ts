import usersRepo from '../resources/users/user.repository';
import User from '../resources/users/user.model';

const createAdmin = async (): Promise<void> => {
  const admin = await usersRepo.getByLogin('admin');
  if (admin) return;
  usersRepo.post({
    name: 'admin',
    login: 'admin',
    password: 'admin'
  } as User);
}

export default createAdmin;
