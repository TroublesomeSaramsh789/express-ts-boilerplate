import { Router } from 'express';
import UserController from './../controllers/usersController/index';

const ApiRouter = Router();

ApiRouter.use('/v1/users', UserController);

export default ApiRouter;
