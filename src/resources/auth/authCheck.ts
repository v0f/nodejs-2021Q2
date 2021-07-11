import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import { JWT_SECRET_KEY } from '../../common/config';

export default asyncHandler(async (req, res, next) => {
  const authHeader = req.header('Authorization');
  if (authHeader) {
    const [type, token] = authHeader.split(' ');
    if (
      type === 'Bearer' &&
      token &&
      JWT_SECRET_KEY &&
      jwt.verify(token, JWT_SECRET_KEY)) {
      return next();
    }
  }
  return res.status(401).send('not authorized');
});
