import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProfileEntity } from '../profile/profile.entity';
import { LogisticEntity } from '../logistics/logistics.entity';
import { ShoppingEntity } from '../shopping/shopping.entity';

@Entity('order')
export class OrderEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: true, default: null })
  order_id?: string;

  @Column({ type: 'varchar', nullable: true, default: null })
  item_id?: string;

  @Column({ type: 'varchar', nullable: true, default: null })
  item_cuantity?: string;

  @OneToOne((type) => ProfileEntity, {
    cascade: true,
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: 'profile_id' })
  profile: ProfileEntity;

  @OneToOne((type) => LogisticEntity, {
    cascade: true,
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: 'logistics_id' })
  logistic: LogisticEntity;

  @OneToOne((type) => ShoppingEntity, {
    cascade: true,
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: 'shopping_id' })
  shopping: ShoppingEntity;

  @CreateDateColumn({ name: 'createdate' })
  createdate: Date;

  @UpdateDateColumn({ name: 'updateddate' })
  updateddate: Date;
}
