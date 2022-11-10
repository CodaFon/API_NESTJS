import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { Friend } from '../../src/friends/entities/friend.entity';
import { Role } from '../../src/role/entities/role.entity';
import { User } from '../../src/users/entities/user.entity';
import { State } from '../../src/state/entities/state.entity';
import { Message } from '../../src/message/entities/message.entity';
import { Attachement } from '../../src/attachement/entities/attachement.entity';
import { ConversationEntity } from '../../src/conversations/entities/conversation.entity';

config({ path: `.env.dev` });

const configService = new ConfigService();

export default new DataSource({
  type: 'mysql',
  host: configService.get<string>('DB_HOST'),
  port: configService.get<number>('DB_PORT'),
  username: configService.get<string>('DB_USERNAME'),
  password: configService.get<string>('DB_PASSWORD'),
  database: configService.get<string>('DB_NAME'),
  logging: configService.get<boolean>('DB_LOGGING'),
  entities: [
    Role,
    User,
    State,
    Friend,
    ConversationEntity,
    Message,
    Attachement,
  ],
  migrations: [__dirname + '/../../database/migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations',
});
