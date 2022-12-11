import express, { Express, Request, Response, Router } from 'express';
import adminRoutes from './admin';
import authRoutes from './auth';

const routes = Router();
const user: Express = express();
  
user.post('/users/create', (req: Request, res: Response, next) => {
    return res.send('send a user request')
    //return res.send(req.body);
});
  

routes.use('/api/auth', authRoutes) // mount the sub app
routes.use('/api/admin', adminRoutes) // mount the sub app
routes.use('/api', user) // mount the sub app


export default routes;

