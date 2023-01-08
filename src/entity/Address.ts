import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Relation } from "typeorm"
import { IdEntity } from "./common/IdEntity"
import { User } from "./User"

@Entity()
export class Address extends IdEntity {

    @ManyToOne(() => User, (user) => user.addresses)
    @JoinColumn({ name: 'userId' })
    public user: Relation<User>
    @Column({type: 'text'})
    address_one: string

    @Column({type: 'text'})
    address_two: string

    @Column({type: 'text'})
    address_three: string

    @Column()
    postal_code: number

}