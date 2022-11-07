import { Module } from '@nestjs/common';
import { ConversationsController } from './conversations.controller';
import { ConversationsService } from './conversations.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConversationEntity } from './conversation.entity/conversation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ConversationEntity])],
  controllers: [ConversationsController],
  providers: [ConversationsService],
})
export class ConversationsModule {}
