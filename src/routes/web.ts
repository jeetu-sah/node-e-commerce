import express, { Express, Request, Response, Router } from 'express';
import adminRoutes from './admin';
import authRoutes from './auth';
import userRoutes from './modules/user/userRoutes';
import addressRoutes from './modules/address/addressRoutes';
import productsRoutes from './modules/product/productRoutes';

const routes = Router();
//const user: Express = express();

routes.use('/api/auth', authRoutes) // mount the sub app
routes.use('/api/admin', adminRoutes) // mount the sub app
routes.use('/api/users', userRoutes) // mount the sub app
routes.use('/api/address', addressRoutes) // mount the sub app
routes.use('/api/products', productsRoutes) // mount the sub app
//routes.use('/api', user) // mount the sub app products/create


export default routes;

