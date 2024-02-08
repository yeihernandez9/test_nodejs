import { MigrationInterface, QueryRunner } from "typeorm";

export class FistableTables1707361747167 implements MigrationInterface {
    name = 'FistableTables1707361747167'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "shopping" ("id" SERIAL NOT NULL, CONSTRAINT "PK_7e310c863e4d0cc737aee7618fd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "prifile" ("id" SERIAL NOT NULL, "profile_id" character varying, "userProfileId" character varying, "userProfileVersion" character varying, "firstName" character varying, "lastName" character varying, "email" character varying, "document" character varying, "corporateDocument" character varying, "corporateName" character varying, "documentType" character varying, "phone" character varying, "tradeName" character varying, "stateInscription" character varying, "corporatePhone" character varying, "isCorporate" character varying, "customerClass" character varying, "customerCode" character varying, CONSTRAINT "PK_0a28238e7061cc3670966b36f6d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "logistics" ("id" SERIAL NOT NULL, "deliveryCompany" character varying, "warehouseId" character varying, CONSTRAINT "PK_aad8ac3e8e938d2b478970f8d25" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order" ("id" SERIAL NOT NULL, "order_id" character varying, "item_id" character varying, "item_cuantity" character varying, "createdate" TIMESTAMP NOT NULL DEFAULT now(), "updateddate" TIMESTAMP NOT NULL DEFAULT now(), "profile_id" integer NOT NULL, "logistics_id" integer NOT NULL, "shopping_id" integer NOT NULL, CONSTRAINT "REL_3d946eba1edd6c4043bd388cd6" UNIQUE ("profile_id"), CONSTRAINT "REL_cf72d62d59ac9be6aabfb0d360" UNIQUE ("logistics_id"), CONSTRAINT "REL_f2081ca804ec4bfed2b2b7a06a" UNIQUE ("shopping_id"), CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_3d946eba1edd6c4043bd388cd64" FOREIGN KEY ("profile_id") REFERENCES "prifile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_cf72d62d59ac9be6aabfb0d3607" FOREIGN KEY ("logistics_id") REFERENCES "logistics"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_f2081ca804ec4bfed2b2b7a06a6" FOREIGN KEY ("shopping_id") REFERENCES "shopping"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_f2081ca804ec4bfed2b2b7a06a6"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_cf72d62d59ac9be6aabfb0d3607"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_3d946eba1edd6c4043bd388cd64"`);
        await queryRunner.query(`DROP TABLE "order"`);
        await queryRunner.query(`DROP TABLE "logistics"`);
        await queryRunner.query(`DROP TABLE "prifile"`);
        await queryRunner.query(`DROP TABLE "shopping"`);
    }

}
