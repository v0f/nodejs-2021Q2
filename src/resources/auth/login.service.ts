import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import usersRepo from '../users/user.service';
import { JWT_SECRET_KEY } from '../../common/config';

const auth = async (login: string, password: string): Promise<string | null> => {
  const user = await usersRepo.getByLogin(login);
  if (!user) {
    return null;
  }
  const passOk = bcrypt.compare(password, user.password);
  if (!passOk) {
    return null;
  }

  const token = jwt.sign({ id: user.id, login }, JWT_SECRET_KEY as string);
  return token;
};

export default { auth };
