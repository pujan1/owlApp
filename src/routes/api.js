import express from 'express';
import standingsController from '../controllers/standings.controller';
import schedulesController from '../controllers/schedules.controller';
import playersController from '../controllers/players.controller';
const routes = express();


routes.get('/', (req, res) => res.send('Invalid Endpoint'));

routes.get('/standings', standingsController.get);
routes.get('/schedules', schedulesController.get);
routes.get('/players/:id', playersController.get);


export default routes;