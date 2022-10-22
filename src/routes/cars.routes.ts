import { Router } from 'express';
import CarModel from '../models/CarsModels';
import CarsService from '../services/CarsServices';
import CarsController from '../controllers/CarsControllers';

const route = Router();

const car = new CarModel();
const carsService = new CarsService(car);
const carsController = new CarsController(carsService);

route.post('/cars', (req, res) => carsController.create(req, res));

export default route;

// SOURCE
// https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/31fdf796-fb5a-4a3f-b1d5-4eadd0ab0147/day/d87d8c3f-23f2-429b-b571-265103e6418d/lesson/a7c5ee2b-6b6d-480e-bc5c-ec5e3e1cc22c