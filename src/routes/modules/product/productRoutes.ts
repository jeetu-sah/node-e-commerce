import express, { Express, Request, Response, Router } from 'express';
import { send } from 'process';
import myDataSource from "../../../database/app-data-source";
import multer from 'multer';
import path from 'path';
import { Product } from '../../../entity/Product';
import { File } from '../../../entity/File';

const routes = Router();
const productRoutes: Express = express();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    
    filename: function (req: any, file: any, cb: any) {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

const upload = multer({storage: storage});

productRoutes.post('/:id/upload-image', upload.single('images'),  async(req: Request, res: Response, next) => {
    res.setHeader('Content-Type', 'multipart/form-data');
    //res.send(req.file);
    let product_id: number = parseInt(req.params.id);
    const product = await myDataSource.getRepository(Product).findOne({where:{ id: product_id} })
    if(!product) {
        return res.send('product not found')
    }

    let newfile  = new File;
    newfile.file_name = req.file?.filename;
    newfile.file_type = req.file?.mimetype;
    newfile.file_size = req.file?.size;
    newfile.file_path = req.file?.path;
    newfile.entityId = product.id;
    newfile.entityType = "Product";
    newfile.owner = product
    
    const results = await myDataSource.getRepository(File).save(newfile)
    return res.send(results)
});

productRoutes.get('/',  async(req: Request, res: Response, next) => {
    const addresses = await myDataSource.getRepository(Product).find()
    return res.send(addresses)
});

productRoutes.post('/create', upload.single('images') , async(req: Request, res: Response, next) => {
    const product = await myDataSource.getRepository(Product).create(req.body)
    const results = await myDataSource.getRepository(Product).save(product)
    return res.send(results)
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



export default productRoutes;