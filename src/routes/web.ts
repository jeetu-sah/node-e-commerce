import express, { Express, Request, Response, Router } from 'express';
import adminRoutes from './admin';
import authRoutes from './auth';


const routes = Router();
//const user: Express = express();
  

routes.use('/api/auth', authRoutes) // mount the sub app
routes.use('/api/admin', adminRoutes) // mount the sub app
//routes.use('/api', user) // mount the sub app


export default routes;

