import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PaymentService {
  constructor(private prismaService: PrismaService) { }

  create(createPaymentDto: CreatePaymentDto) {
    return this.prismaService.payment.create({
      data: {
        ...createPaymentDto
      }
    });
  }

  remove(id: number) {
    return this.prismaService.payment.delete({ where: { id } });
  }
}
