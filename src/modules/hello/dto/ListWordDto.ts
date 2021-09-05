import { ApiProperty } from '@nestjs/swagger';

export class ListWordDto {
  @ApiProperty({ required: true, description: '单词id' })
  id: number;
}
