import { ApiProperty } from '@nestjs/swagger';

export class CreateTattooTypeDto {
  @ApiProperty({
    example: 'Blackwork',
    description: 'Tattoo type name. Should be unique.',
  })
  name: string;
}
