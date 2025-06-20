import { ApiProperty } from '@nestjs/swagger';

export class CreateTagDto {
  @ApiProperty({
    example: 'Lettering',
    description: 'Tag name. Should be unique.',
  })
  name: string;
}
