import { ApiProperty } from '@nestjs/swagger';

export class UpdateWordDto {
  @ApiProperty({ required: true, description: '单词id' })
  id: number;

  @ApiProperty({ required: true, description: '单词' })
  word: string;
}
