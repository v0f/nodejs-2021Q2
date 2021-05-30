const _ = require('lodash');
const router = require('express').Router({ mergeParams: true });
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
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

module.exports = router;
