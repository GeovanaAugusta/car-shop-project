import { Router } from 'express';
import MotorcycleModel from '../models/MotorcylesModels';
import MotorcyclesService from '../services/MotorcylesServices';
import MotorcycleController from '../controllers/MotorcylesControllers';

const route = Router();

const motor = new MotorcycleModel();
const motorsService = new MotorcyclesService(motor);
const motorsController = new MotorcycleController(motorsService);

const routeId = '/motorcycles/:id';

route.post('/motorcycles', (req, res) => motorsController.create(req, res));
route.get('/motorcycles', (req, res) => motorsController.read(req, res));
route.get(routeId, (req, res) => motorsController.readOne(req, res));
route.put(routeId, (req, res) => motorsController.update(req, res));
route.delete(routeId, (req, res) => motorsController.delete(req, res));

export default route;
