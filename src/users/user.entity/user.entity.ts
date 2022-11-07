import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 25, unique: true })
  pseudo: string;

  @Column({ unique: true })
  mail: string;

  @Column({ type: 'datetime' })
  birthDate: Date;

  @Column()
  password: string;

  @Column({ type: 'boolean', default: false })
  active: boolean;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'datetime', nullable: true })
  deleted_at: Date;

  @Column({ type: 'datetime', nullable: true })
  updated_at: Date;
}
