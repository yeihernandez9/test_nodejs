import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { ProfileEntity } from "../profile/profile.entity";

@Entity('payment')
export class  PaymentEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', nullable: true, default: null })
    value?: string;

    @Column({ type: 'varchar', nullable: true, default: null })
    createDate?: string;

    @Column({ type: 'varchar', nullable: true, default: null })
    paymentSystemName?: string;

    @Column({ type: 'varchar', nullable: true, default: null })
    item_id?: string;

    @Column({ type: 'varchar', nullable: true, default: null })
    quantity?: string;

    @Column({ type: 'varchar', nullable: true, default: null })
    sellingPrice?: string;

    @OneToOne((type) => ProfileEntity, {
        cascade: true,
        nullable: false,
        eager: true,
      })
      @JoinColumn({ name: 'profile_id' })
      profile: ProfileEntity;
}