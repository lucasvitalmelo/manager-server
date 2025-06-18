import { Injectable } from '@nestjs/common';
import { CreateTattooTypeDto } from './dto/create-tattoo-type.dto';
import { UpdateTattooTypeDto } from './dto/update-tattoo-type.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TattooTypeService {
  constructor(private prismaService: PrismaService) { }

  create(createTattooTypeDto: CreateTattooTypeDto) {
    return this.prismaService.tattooType.create({ data: { ...createTattooTypeDto } });
  }

  findAll() {
    return this.prismaService.tattooType.findMany();
  }

  findOne(id: number) {
    return this.prismaService.tattooType.findUnique({ where: { id } });
  }

  update(id: number, updateTattooTypeDto: UpdateTattooTypeDto) {
    return this.prismaService.tattooType.update({ where: { id }, data: { ...updateTattooTypeDto } });
  }

  remove(id: number) {
    return this.prismaService.tattooType.delete({ where: { id } });
  }
}
