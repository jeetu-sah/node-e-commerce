import express, { Express, Request, Response, Router } from 'express';
const routes = Router();
const auth: Express = express();


auth.post('/login', (req: Request, res: Response, next) => {
    return res.send("login request");
});

auth.post('/register', (req: Request, res: Response, next) => {
   return res.send('register request')
    // return res.send(req.body);
});

export default auth;