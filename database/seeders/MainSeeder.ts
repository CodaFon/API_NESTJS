import { DataSource } from 'typeorm';
import { runSeeder, Seeder } from 'typeorm-extension';
import { RoleSeed } from './role-create.seed';
import { StateSeed } from './state-create.seed';
import { UserSeed } from './user-create.seed';

export class MainSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    await runSeeder(dataSource, RoleSeed);
    await runSeeder(dataSource, StateSeed);
    await runSeeder(dataSource, UserSeed);
  }
}
