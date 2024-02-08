import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('prifile')
export class ProfileEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: true, default: null })
  profile_id?: string;

  @Column({ type: 'varchar', nullable: true, default: null })
  userProfileId?: string;

  @Column({ type: 'varchar', nullable: true, default: null })
  userProfileVersion?: string;

  @Column({ type: 'varchar', nullable: true, default: null })
  firstName?: string;

  @Column({ type: 'varchar', nullable: true, default: null })
  lastName?: string;

  @Column({ type: 'varchar', nullable: true, default: null })
  email?: string;

  @Column({ type: 'varchar', nullable: true, default: null })
  document?: string;

  @Column({ type: 'varchar', nullable: true, default: null })
  corporateDocument?: string;

  @Column({ type: 'varchar', nullable: true, default: null })
  corporateName?: string;

  @Column({ type: 'varchar', nullable: true, default: null })
  documentType?: string;

  @Column({ type: 'varchar', nullable: true, default: null })
  phone?: string;

  @Column({ type: 'varchar', nullable: true, default: null })
  tradeName?: string;

  @Column({ type: 'varchar', nullable: true, default: null })
  stateInscription?: string;

  @Column({ type: 'varchar', nullable: true, default: null })
  corporatePhone?: string;

  @Column({ type: 'varchar', nullable: true, default: null })
  isCorporate?: string;

  @Column({ type: 'varchar', nullable: true, default: null })
  customerClass?: string;

  @Column({ type: 'varchar', nullable: true, default: null })
  customerCode?: string;
}
