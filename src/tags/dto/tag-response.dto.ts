import { ApiProperty } from '@nestjs/swagger';

export class TagResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Lettering' })
  name: string;
}
