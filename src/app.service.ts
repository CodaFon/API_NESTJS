import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return __dirname + `./../.env.${process.env.NODE_ENV}`;
  }
}
