import express, { Express, Request, Response, Router } from 'express';
import { send } from 'process';
import myDataSource from "../../../database/app-data-source";
import { Address } from '../../../entity/Address';
import { newAddressFacade, newUserFacade } from '../../../facades/BaseFacade';
import { Convertor } from './../../../utils/Convertor'
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
    //const address = await myDataSource.getRepository(Address).create(req.body)
    const { userId } = req.body;
    const request = req.body;
    const userDetails = await newUserFacade.first(parseInt(userId));
    if (!userDetails) {
        throw new Error('User not found for the id is, '+ userId);
    }

    request.user = userDetails
    const addressResponse = Convertor.toAddressConvertor(request);
    
    const result = await newAddressFacade.save(addressResponse);
    return res.send(result);
  
});



export default addressRoutes;