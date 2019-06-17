import { Controller, Get, Post, HttpException, HttpStatus, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // index
  @Get()
  index(@Res() res: Response) {
    return res.status(HttpStatus.OK).json({
      code: 200, 
      message: "success",
      result: {
        version: "0.0.1",
        time: new Date().getTime(),
      }, 
    });
  }

  // 404 page
  @Get('404')
  page404() {
    throw new HttpException({
      status: HttpStatus.FORBIDDEN,
      error: '404: page not found.',
    }, 404);
  }

  @Get('/helloworld')
  getHello(): string {
    return this.appService.getHello();
  }

  // 自定义 getVersion 方法: 
  @Get('/version')
  getVersion(): Object {
    return this.appService.getVersion();
  }
  
  // 自定义 postIndex 方法: 
  @Post('/api')
  postIndex(): Object {
    return this.appService.getVersion();
  }
}
