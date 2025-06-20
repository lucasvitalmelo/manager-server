import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTattooTypeDto } from './dto/create-tattoo-type.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TattooTypeService {
  constructor(private prismaService: PrismaService) { }

  async create(createTattooTypeDto: CreateTattooTypeDto) {
    return this.prismaService.tattooType.create({
      data: { ...createTattooTypeDto },
    });
  }

  async findAll() {
    return this.prismaService.tattooType.findMany();
  }

  async remove(id: number) {
    const type = await this.prismaService.tattooType.findUnique({
      where: { id },
    });

    if (!type) {
      throw new NotFoundException('Tattoo type not found');
    }

    await this.prismaService.tattooType.delete({ where: { id } });

    return { message: 'Tattoo type deleted successfully' };
  }
}
