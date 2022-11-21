import {Entity, 
        PrimaryGeneratedColumn, 
        Column,
        CreateDateColumn,
        UpdateDateColumn,
        DeleteDateColumn
} from "typeorm";

import { IdEntity } from "./common/IdEntity"

@Entity()
export class User extends IdEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type:'varchar', length: 100})
    first_name: string;

    @Column({ type: "varchar", length: 100 })
    last_name: string;

    @Column({ type: "int"})
    age: number;

    @Column({ type: "bigint"})
    mobile: number;

    @Column({ type: "varchar", length:50})
    email: string;

    @Column({ type:"varchar", length:50})
    birthplace: string;

}