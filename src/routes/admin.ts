import express, { Express, Request, Response, Router } from 'express';
const routes = Router();
const admin: Express = express();


admin.post('/', (req: Request, res: Response, next) => {
    return res.send(req.body);
});

admin.post('/users', (req: Request, res: Response, next) => {
    return res.send(req.body);
});

export default admin;