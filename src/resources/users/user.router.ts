import { Router } from 'express';
import usersService from './user.service'

const router = Router();

router.route('/').get(async (_req, res) => {
  const users = await usersService.getAll();
  res.json(users);
});

router.route('/').post(async (req, res) => {
  const user = await usersService.post(req.body);
  res.status(201).json(user);
});

router.route('/:id').get(async (req, res) => {
  const user = await usersService.get(req.params.id);
  res.json(user);
});

router.route('/:id').put(async (req, res) => {
  const user = await usersService.put(req.params.id, req.body);
  res.json(user);
});

router.route('/:id').delete(async (req, res) => {
  await usersService.userDelete(req.params.id);
  res.json(req.params.id);
});

export default router;
