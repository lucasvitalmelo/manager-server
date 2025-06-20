import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CustomerService {
  constructor(private prismaService: PrismaService) { }

  create(createCustomerDto: CreateCustomerDto) {
    return this.prismaService.customer.create({
      data: { ...createCustomerDto },
    });
  }

  findAll() {
    return this.prismaService.customer.findMany();
  }

  async findOne(id: number) {
    const customer = await this.prismaService.customer.findUnique({
      where: { id },
    });
    if (!customer) {
      throw new NotFoundException('Customer not found');
    }
    return customer;
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    await this.findOne(id);
    return this.prismaService.customer.update({
      where: { id },
      data: { ...updateCustomerDto },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.prismaService.customer.delete({ where: { id } });
    return { message: 'Customer deleted successfully' };
  }
}
