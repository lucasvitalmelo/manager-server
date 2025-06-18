import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
  tattooType?: string
  bodyLocation?: string
  width?: number
  height?: number
  price?: number
  status?: "PENDING" | "PROGRESS" | "CONCLUDED"
  tags?: string[]
  description?: string
  scheduledDate?: Date
}
