import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

import { CreateVisitDto } from './dto/SaveVisitDto';
import { ListVisitDto } from './dto/ListVisitDto';
import { VisitService } from './visit.service';

@Controller('visit')
export class VisitController {
  constructor(private readonly visitService: VisitService) {}
  @ApiOperation({
    description: '创建访问',
  })
  @Post('pv')
  save(@Body() body: CreateVisitDto) {
    return this.visitService.pv(body);
  }

  @ApiOperation({
    description: '获取访问',
  })
  @Get('list')
  list(@Query() query: ListVisitDto) {
    return this.visitService.list(query);
  }
}
