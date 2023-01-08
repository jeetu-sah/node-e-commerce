import express, { Express, Request, Response, Router } from 'express';
import { send } from 'process';
import myDataSource from "../../../database/app-data-source";
import { Address } from '../../../entity/Address';
const routes = Router();
const addressRoutes: Express = express();


addressRoutes.get('/', async(req: Request, res: Response, next) => {
    const addresses = await myDataSource.getRepository(Address).find({relations:['user']})
    return res.send(addresses)
});

addressRoutes.get('/:id', async (req: Request, res: Response, next) => {
    try {
        let address_id: number = parseInt(req.params.id);
        const address = await myDataSource.getRepository(Address).findOne({ relations:['user'] , where:{ id: address_id} })
        return res.send(address)
    }
    catch(error){
        throw new Error('This is an error')
    }
});

addressRoutes.delete('/:id', async (req: Request, res: Response, next) => {
    try {
        let id: number = parseInt(req.params.id);
        //const address = await myDataSource.getRepository(Address).delete({id})
        const address = await myDataSource.getRepository(Address).softDelete({id})
        return res.send(address)
    }
    catch(error){
        throw new Error('This is an error')
    }
});

addressRoutes.post('/create', async(req: Request, res: Response, next) => {
    const address = await myDataSource.getRepository(Address).create(req.body)
    const results = await myDataSource.getRepository(Address).save(address)
    return res.send(results)
});



export default addressRoutes;