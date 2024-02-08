import { BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('shopping')
export class ShoppingEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
}
