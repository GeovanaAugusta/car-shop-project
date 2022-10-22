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

// SOURCE
// https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/31fdf796-fb5a-4a3f-b1d5-4eadd0ab0147/day/d87d8c3f-23f2-429b-b571-265103e6418d/lesson/9ec9af6c-f710-48eb-8e36-8577c9f0f551