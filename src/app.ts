import express, { Application } from 'express';
import cors from 'cors';
import usersRouter from './app/modules/users/users.route';

const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// user route
app.use('/api/v1/users/', usersRouter);

export default app;
