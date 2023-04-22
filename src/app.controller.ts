import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): User {
    return this.appService.getHello();
  }
}
