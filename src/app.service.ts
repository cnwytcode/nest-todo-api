import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
  getHello(): string {
    return 'Hello World!';
  }

  // 自定义：获取版本
  getVersion(): Object {
    return {
      code: 200, 
      msg: "OK",
      data: {
        version: "0.0.1",
        time: new Date().getTime(),
      }, 
    }
  }
}
