import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { User } from '../../src/users/entities/user.entity';
import { faker } from '@faker-js/faker';
import * as bcrypt from 'bcrypt';

export class UserSeed implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    const userRepository = dataSource.getRepository(User);

    const salt = await bcrypt.genSalt();
    const password = await bcrypt.hash('test_dev@codafon', salt);

    for (let index = 0; index < 10; index++) {
      const userData = {
        id: faker.datatype.uuid(),
        pseudo: faker.internet.userName(),
        mail: faker.internet.email(),
        birthDate: faker.date.birthdate(),
        password: password,
        role_id: faker.helpers.arrayElement([
          // '44e2f8e0-eacc-41f4-a332-a244e1a79209',
          '6bdbe0de-06b7-4e17-888c-7ad03df45548',
          // 'c2abf02e-d69c-4df5-b1be-8ecb23b81469',
        ]),
        active: true,
        created_at: faker.date.past(),
      };

      const newUser = userRepository.create(userData);
      await userRepository.save(newUser);
    }
  }
}
