import { ApiProperty } from '@nestjs/swagger';
import { CreateCustomerDto } from './create-customer.dto';

export class CustomerResponseDto extends CreateCustomerDto {
  @ApiProperty({ example: 1 })
  id: number;
}