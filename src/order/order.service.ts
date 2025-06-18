import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrderService {
  constructor(private prismaService: PrismaService) { }

  create(createOrderDto: CreateOrderDto) {
    return this.prismaService.order.create({
      data: {
        ...createOrderDto,
        price: createOrderDto.price * 100 // convert to cents
      }
    });
  }

  async findAll() {
    const orders = await this.prismaService.order.findMany({
      where: { NOT: { status: 'CONCLUDED' } },
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        price: true,
        scheduledDate: true,
        tattooType: true,
        status: true,
        createdAt: true,
        customer: { select: { name: true, phone: true } },
        tags: true,
        payments: {
          select: {
            id: true,
            amount: true,
            description: true,
          }
        }
      },
    });

    const ordersWithPaid = orders.map(
      order => ({
        id: order.id,
        price: order.price / 100,
        scheduledDate: order.scheduledDate,
        tattooType: order.tattooType,
        tags: order.tags,
        customer: order.customer.name,
        phone: order.customer.phone,
        status: order.status,
        paid: order.payments.reduce(
          (sum, payment) => sum + payment.amount, 0
        ),
      }));

    return ordersWithPaid;

  }

  findOne(id: number) {
    return this.prismaService.order.findUnique({
      where: { id },
      include: {
        customer: {
          select: {
            id: true,
            name: true,
            age: true,
            email: true,
            phone: true,
          }
        },
        payments: {
          select: {
            description: true, amount: true, id: true
          }
        }
      }
    });
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return this.prismaService.order.update({
      where: { id },
      data: {
        ...updateOrderDto,

        price: updateOrderDto.price && updateOrderDto.price * 100
      }
    });
  }

  remove(id: number) {
    return this.prismaService.order.delete({ where: { id } });
  }
}
