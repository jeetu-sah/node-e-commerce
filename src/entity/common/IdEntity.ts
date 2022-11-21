import { Column, PrimaryGeneratedColumn, 
                CreateDateColumn,
                UpdateDateColumn,
                DeleteDateColumn  } from "typeorm"

export abstract class IdEntity {
    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date

    @DeleteDateColumn()
    deleted_at: Date
}