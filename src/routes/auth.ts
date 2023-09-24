
import express, { Express, Request, Response, Router } from 'express';
import myDataSource from "./../database/app-data-source";
import { User } from '../entity/User';
import { Convertor } from '../utils/Convertor';
import { newUserFacade } from '../facades/BaseFacade';
import { ApiError } from './../ErrorHandling/APIError'
import { HttpStatusCode } from '../utils/HttpStatusCode';

const routes = Router();
const auth: Express = express();


auth.post('/login', (req: Request, res: Response, next) => {
    return res.send("login request");
});

auth.post('/register', async (req: Request, res: Response, next) => {
    try {
        const email = req.body.email;
        const userExists = await newUserFacade.findByEmail(email)
       
        if (userExists) {
            throw new ApiError(
                'Email',
                HttpStatusCode.BAD_REQUEST,
                false,
                'User is already exists !!!'
            );
        }
        const user = Convertor.toUserRegisteration(req.body);
        const userResponse = await newUserFacade.save(user)
        return res.send(userResponse)
    }
    catch (error) {
        throw new Error('This is an error');
        next(error);
    }
});

export default auth;