import express, { Express, Request, Response, Router } from 'express';
import { send } from 'process';
import myDataSource from "../../../database/app-data-source";
import multer from 'multer';
import path from 'path';

const routes = Router();
const productRoutes: Express = express();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    
    filename: function (req: any, file: any, cb: any) {
        cb(null, Date.now() + '-' + file.originalname + path.extname(file.originalname))
    }
});


const upload = multer({storage: storage});

productRoutes.post('/upload-image', upload.single('images'),  async(req: Request, res: Response, next) => {
    res.setHeader('Content-Type', 'multipart/form-data');
    res.send(req.file?.filename);
    //const addresses = await myDataSource.getRepository(Address).find({relations:['user']})
    //return res.send(addresses)
});
productRoutes.get('/',  async(req: Request, res: Response, next) => {
    res.send("product routes")
    //const addresses = await myDataSource.getRepository(Address).find({relations:['user']})
    //return res.send(addresses)
});

productRoutes.get('/:id', async (req: Request, res: Response, next) => {
    try {
       res.send("return id")
    }
    catch(error){
        throw new Error('This is an error')
    }
});

productRoutes.delete('/:id', async (req: Request, res: Response, next) => {
    try {
        res.send("return delete")
    }
    catch(error){
        throw new Error('This is an error')
    }
});

productRoutes.post('/create', async(req: Request, res: Response, next) => {
    res.send("Create routes")
    // const address = await myDataSource.getRepository(Address).create(req.body)
    // const results = await myDataSource.getRepository(Address).save(address)
    // return res.send(results)
});

export default productRoutes;