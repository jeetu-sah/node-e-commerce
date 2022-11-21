import { DataSource } from "typeorm"
import dotenv from "dotenv";
import {Post} from "../entity/Post"
import {User} from "../entity/User"
dotenv.config();

const myDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "nodeapi",
    entities: [Post, User],
    migrations: ['src/migrations/*.ts'],
    logging: true,
    synchronize: true,
    migrationsTableName: "custom_migration_table",
    
})

export default myDataSource;