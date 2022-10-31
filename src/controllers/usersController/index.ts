import { Router } from 'express';
import { addUser, getUsers, deleteUser, getUser } from './users.service';
import logger from '../../utils/logger/index';

const UserController = Router();

UserController.get('/', async (req, res) => {
  try {
    const data = await getUsers();
    res.status(200).send(data);
  } catch (err) {
    logger.error(err);
    res.sendStatus(404);
  }
});

UserController.get('/:name', async (req, res) => {
  try {
    const { name } = req.params;

    const data = await getUser(name);
    res.status(200).send(data);
  } catch (err) {
    logger.error(err);
    res.sendStatus(404);
  }
});

UserController.post('/', async (req, res) => {
  try {
    const { name, skill } = req.body;
    const data = await addUser({ name, skill });
    res.status(200).send(data);
  } catch (err) {
    logger.error(err);
    res.sendStatus(404);
  }
});

UserController.delete('/:name', async (req, res) => {
  try {
    const { name } = req.params;
    const data = await deleteUser(name);
    res.status(200).send(data);
  } catch (err) {
    logger.error(err);
    res.sendStatus(404);
  }
});

export default UserController;
