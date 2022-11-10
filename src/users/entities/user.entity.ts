import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  BaseEntity,
} from 'typeorm';
import { Role } from '../../role/entities/role.entity';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 50, unique: true })
  pseudo: string;

  @Column({ unique: true })
  mail: string;

  @Column({ type: 'datetime' })
  birthDate: Date;

  @Column()
  password: string;

  @ManyToOne(() => Role, (role) => role.id)
  @JoinColumn({ name: 'role_id' })
  role_id: string;

  @Column({ type: 'boolean', default: false })
  active: boolean;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'datetime', nullable: true })
  deleted_at: Date;

  @Column({ type: 'datetime', nullable: true })
  updated_at: Date;
}
