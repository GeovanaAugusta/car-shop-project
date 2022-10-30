import express from 'express';
import 'express-async-errors';
import carsRouter from './routes/cars.routes';
import motorcycleRouter from './routes/motorcycle.routes';
import errorHandler from './middlewares/error';

const app = express();
app.use(express.json());
app.use(carsRouter);
app.use(motorcycleRouter);
app.use(errorHandler);

export default app;
