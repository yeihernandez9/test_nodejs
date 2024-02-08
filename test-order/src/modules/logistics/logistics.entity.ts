import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('logistics')
export class LogisticEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: true, default: null })
  deliveryCompany?: string;

  @Column({ type: 'varchar', nullable: true, default: null })
  warehouseId?: string;
}
