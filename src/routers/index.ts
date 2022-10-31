import { Router as ExpressRouter } from 'express';

import ApiRouter from './api';

const Router = ExpressRouter();

Router.use('/api', ApiRouter);

Router.get('/', (req, res) => res.send('<h2>SERVER IS WORKING</h2>'));

export default Router;
