import express, { Express, Request, Response, Router } from 'express';
import myDataSource from "./../database/app-data-source";
import { User } from '../entity/User';
const routes = Router();
const auth: Express = express();

auth.post('/login', (req: Request, res: Response, next) => {
    return res.send("login request");
});

auth.post('/register', async (req: Request, res: Response, next) => {
    try {
        const user = await myDataSource.getRepository(User).create(req.body)
        const results = await myDataSource.getRepository(User).save(user)
        return res.send(results)
    }
    catch (error) {
        throw new Error('This is an error');
        next(error);
    }
});

export default auth;