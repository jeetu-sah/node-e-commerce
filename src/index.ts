import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import myDataSource from "./database/app-data-source"
import routes from './routes/web';

import "reflect-metadata"

myDataSource
  .initialize()
  .then(() => {
      console.log(`Data Source has been initialized`);
  })
  .catch((err) => {
      console.error(`Data Source initialization error`, err);
  })

dotenv.config();

const app: Express = express();
//for request 
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
// const port = process.env.PORT;
const port = 4000;

app.use(routes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});