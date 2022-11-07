import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async createUser(user: User) {
    await this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findById(_id: string): Promise<User[]> {
    return await this.usersRepository.find({
      select: ['pseudo', 'mail', 'birthDate', 'active'],
      where: [{ id: _id }],
    });
  }
}
