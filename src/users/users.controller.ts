import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './DTO/createUser.dto';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDTO) {
    return this.service.createUser(createUserDto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findById(@Param() params) {
    return this.service.findById(params.id);
  }
}
