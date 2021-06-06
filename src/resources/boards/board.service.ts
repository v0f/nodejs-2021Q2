import boardsRepo from './board.memory.repository'
import tasksRepo from '../tasks/task.memory.repository'
import Board from './board.model';

const getAll = (): Promise<Board[]> => boardsRepo.getAll();

const get = (id: string): Promise<Board | undefined> => boardsRepo.get(id);

const post = (postData: Board): Promise<Board> => boardsRepo.post(postData);

const put = (id: string, putData: Board): Promise<Board | undefined> => boardsRepo.put(id, putData);

const boardDelete = async (id: string): Promise<string | undefined> => {
  const deletedBoardId = await boardsRepo.boardDelete(id);
  if (deletedBoardId) {
    await tasksRepo.deleteTasksByBoard(deletedBoardId);
  }
  return deletedBoardId;
};

export default { getAll, get, post, put, boardDelete };
