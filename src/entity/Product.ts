import {Entity, 
    PrimaryGeneratedColumn, 
    Column,
    OneToMany,
    Relation
} from "typeorm";

import { IdEntity } from "./common/IdEntity"
import { Address } from "./Address"

@Entity("products")
export class Product extends IdEntity{

@PrimaryGeneratedColumn()
id: number;

@Column({ type:'text' })
name: string;

@Column({ type: "text" })
description: string;

@Column({ type: "text" })
short_description: string;

@Column({ type: "longtext" })
long_description: string;
}