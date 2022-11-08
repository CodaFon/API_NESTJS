import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ConversationEntity } from '../../conversations/entities/conversation.entity';
import { User } from '../../users/entities/user.entity';

@Entity('messages')
export class Message {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  content: string;

  @ManyToOne(
    () => ConversationEntity,
    (conversationEntity) => conversationEntity.id,
  )
  @JoinColumn({ name: 'Conversation_id' })
  conversation_id: string;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_sender' })
  user_sendr: string;

  @Column()
  send: boolean;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'datetime', nullable: true })
  deleted_at: Date;

  @Column({ type: 'datetime', nullable: true })
  updated_at: Date;
}
