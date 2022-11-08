import { config } from 'dotenv';
import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { Role } from '../../src/role/entities/role.entity';
import { State } from '../../src/state/entities/state.entity';
import { User } from '../../src/users/entities/user.entity';
import { MainSeeder } from '../seeders/MainSeeder';

config({ path: '.env.dev', override: true });

const options: DataSourceOptions & SeederOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: Boolean(process.env.DB_LOGGING),
  entities: [Role, State, User],
  seeds: [MainSeeder],
};

export const AppDataSource = new DataSource(options);
