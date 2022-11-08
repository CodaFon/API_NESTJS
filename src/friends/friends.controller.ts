import { Body, Post } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AddFriendsDto } from './dto/addFriends.dto';
import { FriendsService } from './friends.service';

@ApiTags('friends')
@Controller('')
export class FriendsController {
  constructor(private service: FriendsService) {}

  @Post('/friends/new')
  addFriends(@Body() friend: AddFriendsDto) {
    return this.service.addFriends(friend);
  }

  @Get('/friends/')
  findAll() {
    return this.service.findAll();
  }
}
