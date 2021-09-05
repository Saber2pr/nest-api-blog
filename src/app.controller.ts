import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return '这是saber2pr的博客哦, 不许捣乱qwq！！请左转>> https://saber2pr.top/';
  }
}
