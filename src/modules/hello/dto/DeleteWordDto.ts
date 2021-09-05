import { ApiProperty } from '@nestjs/swagger';

export class DeleteWordDto {
  @ApiProperty({ required: true, description: '单词id' })
  id: number;
}
