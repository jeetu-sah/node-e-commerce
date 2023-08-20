import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Relation } from "typeorm"
import { IdEntity } from "./common/IdEntity"
import { User } from "./User"
import { PolymorphicChildInterface } from 'typeorm-polymorphic/dist/polymorphic.interface';
import { PolymorphicParent } from 'typeorm-polymorphic';
import { Product } from "./Product";


@Entity("files")
export class File extends IdEntity implements PolymorphicChildInterface {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text', nullable: true})
    file_name: string | undefined

    @Column({ type: 'text', nullable: true })
    file_title: string | null

    @Column({ type: 'text', nullable: true })
    file_type: string | undefined

    @Column({ type: 'text', nullable: true })
    file_path: string | undefined

    @Column({ type: 'int', nullable: true })
    file_size: number | undefined

    @ManyToOne(() => User, (user) => user.addresses)
    @JoinColumn({ name: 'userId' })
    public user: Relation<User>

    @Column()
    entityId: number;

    @Column({ nullable: true})
    entityType: string;

    @PolymorphicParent(() => [Product])
    owner: Product;


}