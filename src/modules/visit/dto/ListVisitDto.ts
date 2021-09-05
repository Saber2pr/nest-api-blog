import { ApiProperty } from '@nestjs/swagger';

export class ListVisitDto {
  @ApiProperty({ required: false, description: '排序' })
  sort?: string;
}
