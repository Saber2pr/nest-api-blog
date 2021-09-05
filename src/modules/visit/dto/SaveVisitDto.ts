import { ApiProperty } from '@nestjs/swagger';

export class CreateVisitDto {
  @ApiProperty({ required: true, description: '页面' })
  pagePath: string;
}
