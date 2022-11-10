import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport';
import { User } from '../../users/entities/user.entity';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({ usernameField: 'mail' });
  }

  validate(mail: string, password: string): Promise<User> {
    const user = this.authService.validate(mail, password);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
