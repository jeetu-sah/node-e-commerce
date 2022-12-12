import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"
import { IdEntity } from "./common/IdEntity"

@Entity("posts")
export class Post extends IdEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'varchar', length: 100})
    title: string

    @Column()
    text: string
}