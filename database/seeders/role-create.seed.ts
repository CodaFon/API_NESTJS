import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { Role } from '../../src/role/entities/role.entity';

export class RoleSeed implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    const roleRepository = dataSource.getRepository(Role);

    const roleData = [
      {
        id: 'c2abf02e-d69c-4df5-b1be-8ecb23b81469',
        name: 'admin',
      },
      {
        id: '44e2f8e0-eacc-41f4-a332-a244e1a79209',
        name: 'moderator',
      },
      {
        id: '6bdbe0de-06b7-4e17-888c-7ad03df45548',
        name: 'user',
      },
    ];

    const newRole = roleRepository.create(roleData);
    await roleRepository.save(newRole);
  }
}
