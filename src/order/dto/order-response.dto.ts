import { ApiProperty } from '@nestjs/swagger';
import { OrderStatus } from './create-order.dto';

export class OrderResponseDto {
  @ApiProperty({ example: 101, description: 'Order ID' })
  id: number;

  @ApiProperty({ example: 1, description: 'Customer ID' })
  customerId: number;

  @ApiProperty({ example: 'Blackwork', description: 'Tattoo type' })
  tattooType: string;

  @ApiProperty({ example: 'Arm', description: 'Body location' })
  bodyLocation: string;

  @ApiProperty({ example: 10, description: 'Width in centimeters' })
  width: number;

  @ApiProperty({ example: 15, description: 'Height in centimeters' })
  height: number;

  @ApiProperty({ example: 500, description: 'Price in local currency' })
  price: number;

  @ApiProperty({
    example: 'PENDING',
    enum: OrderStatus,
    description: 'Current order status',
  })
  status: OrderStatus;

  @ApiProperty({
    example: ['flower', 'arm', 'realism'],
    description: 'Tags for the order',
  })
  tags: string[];

  @ApiProperty({
    example: 'The client wants soft shading on the side',
    description: 'Description of the order',
    required: false,
  })
  description?: string;

  @ApiProperty({
    example: '1996-08-17T00:00:00.000Z',
    description: 'Scheduled date',
    required: false,
  })
  scheduledDate?: Date;

  @ApiProperty({
    example: '1996-08-17T00:00:00.000Z',
    description: 'Creation date',
  })
  createdAt: Date;

  @ApiProperty({
    example: '1996-08-17T00:00:00.000Z',
    description: 'Last update date',
  })
  updatedAt: Date;
}
