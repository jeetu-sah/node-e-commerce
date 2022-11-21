import { MigrationInterface, QueryRunner } from "typeorm"

export class UserRefactoring1667805934904 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE jitendra_test ( PersonID int, LastName varchar(255), FirstName varchar(255), Address varchar(255), City varchar(255))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
