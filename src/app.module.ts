import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { validate } from '../database/config/env.validation';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FriendsModule } from './friends/friends.module';
import { ConversationsModule } from './conversations/conversations.module';
import { User } from './users/user.entity/user.entity';
import { Friend } from './friends/friend.entity/friend.entity';
import { ConversationEntity } from './conversations/conversation.entity/conversation.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, validate }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [User, Friend, ConversationEntity],
        synchronize: false,
        logging: configService.get<boolean>('DB_LOGGING'),
      }),
    }),
    //load modules
    UsersModule,
    FriendsModule,
    ConversationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
