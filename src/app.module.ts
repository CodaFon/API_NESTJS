import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { validate } from '../database/config/env.validation';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FriendsModule } from './friends/friends.module';
import { ConversationsModule } from './conversations/conversations.module';
import { User } from './users/entities/user.entity';
import { Friend } from './friends/entities/friend.entity';
import { ConversationEntity } from './conversations/entities/conversation.entity';
import { RoleModule } from './role/role.module';
import { StateModule } from './state/state.module';
import { AttachementModule } from './attachement/attachement.module';
import { MessageModule } from './message/message.module';
import { Role } from './role/entities/role.entity';

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
        entities: [Role, User, Friend, ConversationEntity],
        synchronize: false,
        logging: configService.get<boolean>('DB_LOGGING'),
      }),
    }),
    //load modules
    UsersModule,
    FriendsModule,
    ConversationsModule,
    RoleModule,
    StateModule,
    AttachementModule,
    MessageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
