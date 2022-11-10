import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { State } from '../../src/state/entities/state.entity';

export class StateSeed implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    const userRepository = dataSource.getRepository(State);

    const stateData = [
      {
        id: '0472b28c-d30d-4fa2-a8b5-54c2bf9c60a7',
        name: 'in progress',
      },
      {
        id: '06bc70f7-5935-41d0-86b2-f54fdc032420',
        name: 'accepted',
      },
      {
        id: '1df76165-97a1-4e03-b6de-6cb1930aa633',
        name: 'blocked',
      },
      {
        id: '708e8c6b-b4e6-4e98-b616-5f22d68c4293',
        name: 'send',
      },
    ];
    const newState = userRepository.create(stateData);
    await userRepository.save(newState);
  }
}
