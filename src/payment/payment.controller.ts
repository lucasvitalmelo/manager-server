import {
  Controller,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { PaymentResponseDto } from './dto/payment-response.dto';

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiTags('Payment')
@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) { }

  @Post()
  @ApiOperation({ summary: 'Create a new payment for an order' })
  @ApiResponse({
    status: 201,
    description: 'Payment successfully created',
    type: PaymentResponseDto,
  })
  create(@Body() createPaymentDto: CreatePaymentDto) {
    return this.paymentService.create(createPaymentDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a payment by ID' })
  @ApiResponse({
    status: 200,
    description: 'Payment successfully deleted',
  })
  @ApiResponse({
    status: 404,
    description: 'Payment not found',
  })
  remove(@Param('id') id: string) {
    return this.paymentService.remove(+id);
  }
}
