import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validate(mail: string, password: string) {
    const user = await this.userService.getUserByEmail(mail);

    if (!user) {
      return null;
    }

    const passwordValid = await bcrypt.compare(password, user.password);
    return passwordValid ? user : null;
  }

  async login(user: User) {
    const payload = {
      mail: user.mail,
      sub: user.id,
    };

    return {
      acces_token: this.jwtService.sign(payload),
    };
  }
}
