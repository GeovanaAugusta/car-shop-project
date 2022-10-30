import { Router } from 'express';
import CarModel from '../models/CarsModels';
import CarsService from '../services/CarsServices';
import CarsController from '../controllers/CarsControllers';

const route = Router();

const car = new CarModel();
const carsService = new CarsService(car);
const carsController = new CarsController(carsService);

route.post('/cars', (req, res) => carsController.create(req, res));
route.get('/cars', (req, res) => carsController.read(req, res));
route.get('/cars/:id', (req, res) => carsController.readOne(req, res));
route.put('/cars/:id', (req, res) => carsController.update(req, res));
route.delete('/cars/:id', (req, res) => carsController.delete(req, res));

export default route;
