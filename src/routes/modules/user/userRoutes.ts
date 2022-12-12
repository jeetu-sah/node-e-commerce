import express, { Express, Request, Response, Router } from 'express';
const routes = Router();
const userRoutes: Express = express();


userRoutes.post('/users', (req: Request, res: Response, next) => {
    //return res.send('send all users request in ')
    //return res.send(req.body);
});

userRoutes.post('/users/create', (req: Request, res: Response, next) => {
    return res.send('send')
    //return res.send(req.body);
});


export default userRoutes;