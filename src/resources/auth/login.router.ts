import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import loginService from './login.service';

const router = Router();

router.route('/').post(
  asyncHandler(async (req, res) => {
    const { login, password } = req.body;
    const token = await loginService.auth(login, password);
    if (token) {
      res.json({ token });
    } else {
      res.status(403).send('Forbidden');
    }
  })
);

export default router;
