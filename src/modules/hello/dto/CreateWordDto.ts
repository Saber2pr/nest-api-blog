import { ApiProperty } from '@nestjs/swagger';

export class CreateWordDto {
  @ApiProperty({ required: true, description: '单词' })
  word: string;
}
