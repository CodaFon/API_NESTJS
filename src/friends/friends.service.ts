import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Friend } from './friend.entity/friend.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FriendsService {
  constructor(
    @InjectRepository(Friend)
    private friendRepository: Repository<Friend>,
  ) {}
  //SELECT u.pseudo moi, u2.pseudo amis FROM friends a
  // INNER JOIN users u ON user_id = u.id
  // INNER JOIN users u2 ON friend_id = u2.id;

  async findAll(): Promise<Friend[]> {
    return this.friendRepository.find();
  }
}
