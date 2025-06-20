import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PaymentService {
  constructor(private prismaService: PrismaService) { }

  async create(createPaymentDto: CreatePaymentDto) {
    return this.prismaService.payment.create({
      data: { ...createPaymentDto },
    });
  }

  async remove(id: number) {
    const payment = await this.prismaService.payment.findUnique({
      where: { id },
    });

    if (!payment) {
      throw new NotFoundException('Payment not found');
    }

    await this.prismaService.payment.delete({ where: { id } });

    return { message: 'Payment deleted successfully' };
  }
}
