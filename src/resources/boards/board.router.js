const router = require('express').Router();
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards);
});

router.route('/').post(async (req, res) => {
  const board = await boardsService.post(req.body);
  res.status(201).json(board);
});

router.route('/:id').get(async (req, res) => {
  const board = await boardsService.get(req.params.id);
  if (board) {
    res.json(board);
  } else {
    res.sendStatus(404);
  }
});

router.route('/:id').put(async (req, res) => {
  const board = await boardsService.put(req.params.id, req.body);
  res.json(board);
});

router.route('/:id').delete(async (req, res) => {
  const deletedBoardId = await boardsService.boardDelete(req.params.id);
  if (deletedBoardId) {
    res.json(req.params.id);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
