import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../../users/user.entity/user.entity';

@Entity('friends')
export class Friend {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.id)
  user_: User[];

  @ManyToOne(() => User, (user) => user.id)
  friend_: User[];

  @Column()
  friend_status: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'datetime', nullable: true })
  deleted_at: Date;

  @Column({ type: 'datetime', nullable: true })
  updated_at: Date;
}
