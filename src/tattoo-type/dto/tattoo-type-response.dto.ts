import { ApiProperty } from '@nestjs/swagger';

export class TattooTypeResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Blackwork' })
  name: string;
}
