import {Entity, 
        PrimaryGeneratedColumn, 
        Column,
        OneToMany,
        Relation
} from "typeorm";

import { IdEntity } from "./common/IdEntity"
import { Address } from "./Address"

@Entity("users")
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

    @OneToMany(() => Address, (address) => address.user, {
        eager: true,
    })
    addresses: Address[]
    metadata: Relation<Address>

    constructor(
        first_name: string,
        last_name: string,
        age: number,
        mobile: number,
        email: string,
        birthplace: string,
        id: number | null = null,
    ) {
        super();
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
        this.mobile = mobile;
        this.email = email;
        this.birthplace = birthplace;
    }
}