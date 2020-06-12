import { Router } from 'express';

import User from './app/models/User';

import UserController from './app/controllers/UserController';

import authMiddleware from './app/middlewares/auth';

import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.uptade);

export default routes;
