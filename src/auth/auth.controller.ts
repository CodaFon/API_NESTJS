import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { User } from '../users/entities/user.entity';
import { AuthService } from './auth.service';
import { LocalAuthGuards } from './guards/local-auth.guads';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuards)
  @Post('login')
  login(@Req() req: Request) {
    return this.authService.login(req.user as User);
  }
}
