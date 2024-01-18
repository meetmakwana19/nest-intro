import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getObject(): object {
    return {
      name: "Tony Stark",
      alias: "Iron Man"
    };
  }
}
