import _ from 'lodash'
import { Router } from 'express';
import tasksService from './task.service'

const router = Router({ mergeParams: true });

router.route('/').get(async (_req, res) => {
  const tasks = await tasksService.getAll();
  res.json(tasks);
});

router.route('/').post(async (req, res) => {
  const task = await tasksService.post(_.merge(req.body, req.params));
  res.status(201).json(task);
});

router.route('/:tid').get(async (req, res) => {
  const task = await tasksService.get(req.params.tid);
  if (task) {
    res.json(task);
  } else {
    res.sendStatus(404);
  }
});

router.route('/:tid').put(async (req, res) => {
  const task = await tasksService.put(
    req.params.tid,
    _.merge(req.body, req.params)
  );
  res.json(task);
});

router.route('/:tid').delete(async (req, res) => {
  const deletedTaskId = await tasksService.taskDelete(req.params.tid);
  if (deletedTaskId) {
    res.json(req.params.tid);
  } else {
    res.sendStatus(404);
  }
});

export default router;
