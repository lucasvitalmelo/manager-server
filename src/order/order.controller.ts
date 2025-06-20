import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { OrderResponseDto } from './dto/order-response.dto';

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiTags('Order')
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) { }

  @Post()
  @ApiOperation({ summary: 'Create a new order' })
  @ApiResponse({
    status: 201,
    description:
      'Returns the created order, with price converted from cents to real currency.',
    type: OrderResponseDto,
  })
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all active orders' })
  @ApiResponse({
    status: 200,
    description:
      'Returns a list of active orders (status different from CONCLUDED), including customer name, phone, total paid amount, and price in real currency.',
    type: [OrderResponseDto],
  })
  findAll() {
    return this.orderService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a single order by ID' })
  @ApiResponse({
    status: 200,
    description:
      'Returns detailed order information including customer data, payments, total paid amount, and price in real currency. Throws 404 if not found.',
    type: OrderResponseDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Order not found.',
  })
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an order by ID' })
  @ApiResponse({
    status: 200,
    description:
      'Returns the updated order with price in real currency. If the order does not exist, throws 404.',
    type: OrderResponseDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Order not found.',
  })
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.update(+id, updateOrderDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an order by ID' })
  @ApiResponse({
    status: 200,
    description: 'Order successfully deleted. Returns a success message.',
  })
  @ApiResponse({
    status: 404,
    description: 'Order not found.',
  })
  remove(@Param('id') id: string) {
    return this.orderService.remove(+id);
  }
}
