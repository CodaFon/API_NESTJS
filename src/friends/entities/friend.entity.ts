import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { State } from '../../state/entities/state.entity';
import { User } from '../../users/entities/user.entity';

@Entity('friends')
export class Friend {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user_id: User[];

  @ManyToOne(() => State, (state) => state.id)
  @JoinColumn({ name: 'state_id' })
  state_id: string;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'friend_id' })
  friend_id: User[];

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'datetime', nullable: true })
  deleted_at: Date;

  @Column({ type: 'datetime', nullable: true })
  updated_at: Date;
}
