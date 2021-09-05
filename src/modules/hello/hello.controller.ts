import { DeleteWordDto } from './dto/DeleteWordDto';
import { ListWordDto } from './dto/ListWordDto';
import { UpdateWordDto } from './dto/UpdateWordDto';
import { HelloService } from './hello.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

import { HelloGuard } from '../../guards/hello.guard';
import { CreateWordDto } from './dto/CreateWordDto';

@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}
  @ApiOperation({
    description: '创建单词',
  })
  @Post('word/create')
  @UseGuards(HelloGuard)
  createWord(@Body() body: CreateWordDto) {
    return this.helloService.create(body.word);
  }

  @ApiOperation({
    description: '更新单词',
  })
  @Post('word/update')
  @UseGuards(HelloGuard)
  updateWord(@Body() body: UpdateWordDto) {
    return this.helloService.update(body.id, body.word);
  }

  @ApiOperation({
    description: '获取单词',
  })
  @Get('word/list')
  @UseGuards(HelloGuard)
  listWord(@Query() query: ListWordDto) {
    return this.helloService.list(query.id);
  }

  @ApiOperation({
    description: '删除单词',
  })
  @Delete('word/delete')
  @UseGuards(HelloGuard)
  deleteWord(@Body() body: DeleteWordDto) {
    return this.helloService.delete(body.id);
  }
}
