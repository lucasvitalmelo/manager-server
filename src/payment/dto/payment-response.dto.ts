import { ApiProperty } from '@nestjs/swagger';

export class PaymentResponseDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 1, description: 'Order ID related to this payment' })
  orderId: number;

  @ApiProperty({ example: 'Deposit - first session' })
  description: string;

  @ApiProperty({ example: 500 })
  amount: number;
}
