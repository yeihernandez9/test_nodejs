import { MigrationInterface, QueryRunner } from "typeorm";

export class FirstTable1707399486071 implements MigrationInterface {
    name = 'FirstTable1707399486071'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "prifile" ("id" SERIAL NOT NULL, "profile_id" character varying, "userProfileId" character varying, "userProfileVersion" character varying, "firstName" character varying, "lastName" character varying, "email" character varying, "document" character varying, "corporateDocument" character varying, "corporateName" character varying, "documentType" character varying, "phone" character varying, "tradeName" character varying, "stateInscription" character varying, "corporatePhone" character varying, "isCorporate" character varying, "customerClass" character varying, "customerCode" character varying, CONSTRAINT "PK_0a28238e7061cc3670966b36f6d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "payment" ("id" SERIAL NOT NULL, "value" character varying, "createDate" character varying, "paymentSystemName" character varying, "item_id" character varying, "quantity" character varying, "sellingPrice" character varying, "profile_id" integer NOT NULL, CONSTRAINT "REL_643552fcfc44ed6f6036befe65" UNIQUE ("profile_id"), CONSTRAINT "PK_fcaec7df5adf9cac408c686b2ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "payment" ADD CONSTRAINT "FK_643552fcfc44ed6f6036befe656" FOREIGN KEY ("profile_id") REFERENCES "prifile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "payment" DROP CONSTRAINT "FK_643552fcfc44ed6f6036befe656"`);
        await queryRunner.query(`DROP TABLE "payment"`);
        await queryRunner.query(`DROP TABLE "prifile"`);
    }

}
