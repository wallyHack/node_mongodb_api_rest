
// configuración del servidor

import express, { json } from 'express';
import morgan from 'morgan';
const app = express();

// middlewares -> funciones que se ejecutan antes de que los datos lleguen
app.use(morgan('dev'));
app.use(json());

// importing the routes
import IndexRoutes from './routes/index.routes';
import TasksRoutes from './routes/tasks.routes';

// routes
app.use(IndexRoutes);
app.use('/api/tasks/', TasksRoutes);

export default app;