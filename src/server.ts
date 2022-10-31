import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
dotenv.config();

import Router from './routers/index';

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());
server.use(express.static('public'));
server.use(express.urlencoded({ extended: true }));

server.use('/', Router);

export default server;
