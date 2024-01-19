import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

// empty parameter to @Controller is triggered at no router /
// `/user` wont trigger this Controller
@Controller()
export class AppController {

  // dependency injection in action
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header("Content-Type", "application/json")
  getObject(): object {
    return this.appService.getObject();
  }
  // getHello(): {name: string} {
  //   return {"name": "Tony Stark"};
  // }
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
