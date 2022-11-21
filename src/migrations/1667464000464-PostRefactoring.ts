import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableIndex,
    TableColumn,
    TableForeignKey,
} from "typeorm"

export class PostRefactoring1667464000464 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query('ALTER TABLE `post` CHANGE `title` `name` VARCHAR(100)');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE `post` CHANGE `name` `title` VARCHAR(100)')

    }

}
