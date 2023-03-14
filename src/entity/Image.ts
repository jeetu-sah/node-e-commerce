import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"
import { IdEntity } from "./common/IdEntity"

@Entity("images")
export class Image extends IdEntity {
    @Column({type: 'varchar', length: 100})
    name: string

    @Column('text')
    path: string
}