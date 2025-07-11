import { ApiProperty } from '@nestjs/swagger';

export class CreatePaymentDto {
  @ApiProperty({ example: 1, description: 'Order ID related to this payment' })
  orderId: number;

  @ApiProperty({ example: 'Deposit - first session', description: 'Payment description' })
  description: string;

  @ApiProperty({ example: 500, description: 'Amount in BRL' })
  amount: number;
}
