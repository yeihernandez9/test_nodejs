import { MigrationInterface, QueryRunner } from "typeorm";

export class Fisttable1707363406107 implements MigrationInterface {
    name = 'Fisttable1707363406107'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "prifile" ("id" SERIAL NOT NULL, "profile_id" character varying, "userProfileId" character varying, "userProfileVersion" character varying, "firstName" character varying, "lastName" character varying, "email" character varying, "document" character varying, "corporateDocument" character varying, "corporateName" character varying, "documentType" character varying, "phone" character varying, "tradeName" character varying, "stateInscription" character varying, "corporatePhone" character varying, "isCorporate" character varying, "customerClass" character varying, "customerCode" character varying, CONSTRAINT "PK_0a28238e7061cc3670966b36f6d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "prifile"`);
    }

}
