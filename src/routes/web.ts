import express, { Express, Request, Response, Router } from 'express';
import adminRoutes from './admin';

const routes = Router();
const user: Express = express();
  
user.post('/users/create', (req: Request, res: Response, next) => {
    return res.send(req.body);
});
  

routes.use('/api/admin', adminRoutes) // mount the sub app
routes.use('/api', user) // mount the sub app


export default routes;

