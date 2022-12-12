import express, { Express, Request, Response, Router } from 'express';
import myDataSource from "../../../database/app-data-source";
import { User } from '../../../entity/User';
const routes = Router();
const userRoutes: Express = express();


userRoutes.post('/', async(req: Request, res: Response, next) => {
    const users = await myDataSource.getRepository(User).find()
    return res.send(users)
});

userRoutes.post('/:id', async (req: Request, res: Response, next) => {
    try {
        // return res.send(`sen ${req.params.id}`)
        let user_id: number = parseInt(req.params.id);
        const users = await myDataSource.getRepository(User).findOneBy({ id: user_id })
        return res.send(users)
    }
    catch(error){
        throw new Error('This is an error')
    }
});


export default userRoutes;