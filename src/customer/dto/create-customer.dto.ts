import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDateString, IsEmail } from 'class-validator';

export class CreateCustomerDto {
  @ApiProperty({
    example: 'Lucas Vital',
    description: 'Full name of the customer',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: '1996-08-17T00:00:00.000Z',
    description: 'Date of birth',
    type: String,
    format: 'date',
  })
  @IsDateString()
  age: Date;

  @ApiProperty({
    example: 'lucas@email.com',
    description: 'Email address of the customer',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: '11912345678',
    description: 'Phone number of the customer',
  })
  @IsString()
  phone: string;
}
