import {Entity, 
    PrimaryGeneratedColumn, 
    Column,
    OneToMany,
    Relation
} from "typeorm";

import { IdEntity } from "./common/IdEntity"
import { Address } from "./Address"
import { PolymorphicChildren } from 'typeorm-polymorphic';
import { File } from "./File";


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

@PolymorphicChildren(() => File, {
    eager: false,
})
files: File[]

}