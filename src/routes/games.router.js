import express from 'express';
import {
  getGames,
  getOneGame,
  putGame,
  deleteGame,
  postGame,
} from '../controllers/games.controller.js';

const gameRouter = express.Router();

gameRouter.get('/', getGames);
gameRouter.get('/:gameId', getOneGame);
gameRouter.post('/', postGame);
gameRouter.delete('/:gameId', deleteGame);
gameRouter.put('/:gameId', putGame);

export default gameRouter;