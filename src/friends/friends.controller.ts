import { Controller, Get } from '@nestjs/common';
import { FriendsService } from './friends.service';

@Controller('friends')
export class FriendsController {
  constructor(private service: FriendsService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
