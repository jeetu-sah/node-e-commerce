import { DataSource } from "typeorm"
import dotenv from "dotenv";
import {Post} from "../entity/Post"
import {User} from "../entity/User"

dotenv.config();

const myDataSource = new DataSource({
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "",
    "database": "nodeapi",
    //entities: [Post, User],
    "entities": ["src/entity/**/*.ts"],
    "logging": true,
    "synchronize": true,
    "migrationsRun": true,
    "migrations": ["src/migrations/**/*.ts"],
    "migrationsTableName": "migrations"
    
})

export default myDataSource;