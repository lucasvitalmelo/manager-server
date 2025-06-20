import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export enum OrderStatus {
  PENDING = 'PENDING',
  PROGRESS = 'PROGRESS',
  CONCLUDED = 'CONCLUDED',
}

export class CreateOrderDto {
  @ApiProperty({ example: 1, description: 'Customer ID' })
  @IsNumber()
  @IsNotEmpty()
  customerId: number;

  @ApiProperty({ example: 'Blackwork', description: 'Tattoo type' })
  @IsString()
  @IsNotEmpty()
  tattooType: string;

  @ApiProperty({ example: 'Arm', description: 'Body location for the tattoo' })
  @IsString()
  @IsNotEmpty()
  bodyLocation: string;

  @ApiProperty({ example: 10, description: 'Width in centimeters' })
  @IsNumber()
  @Min(1)
  width: number;

  @ApiProperty({ example: 15, description: 'Height in centimeters' })
  @IsNumber()
  @Min(1)
  height: number;

  @ApiProperty({ example: 500, description: 'Tattoo price in local currency' })
  @IsNumber()
  @Min(0)
  price: number;

  @ApiProperty({
    example: 'PENDING',
    enum: OrderStatus,
    description: 'Order status',
  })
  @IsEnum(OrderStatus)
  status: OrderStatus;

  @ApiProperty({
    example: ['flower', 'arm', 'realism'],
    description: 'Tags related to the tattoo order',
  })
  @IsArray()
  @IsString({ each: true })
  tags: string[];

  @ApiPropertyOptional({
    example: 'The client wants soft shading on the side',
    description: 'Optional description of the order',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    example: '1996-08-17T00:00:00.000Z',
    description: 'Scheduled date for the tattoo session',
    type: String,
    format: 'date-time',
  })
  @IsOptional()
  @IsDate()
  scheduledDate?: Date;
}
