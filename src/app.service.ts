import { Injectable } from '@nestjs/common';
import { User } from './user.dto';

@Injectable()
export class AppService {
  getHello(): User {
    return {
      email: 'a',
      password: '',
      roles: ['a'],
      isEnabled: true,
    };
  }
}
