import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TagsService {
  constructor(private prismaService: PrismaService) { }

  async create(createTagDto: CreateTagDto) {
    return this.prismaService.tags.create({ data: { ...createTagDto } });
  }

  async findAll() {
    return this.prismaService.tags.findMany();
  }

  async remove(id: number) {
    const tag = await this.prismaService.tags.findUnique({ where: { id } });

    if (!tag) {
      throw new NotFoundException('Tag not found');
    }

    await this.prismaService.tags.delete({ where: { id } });

    return { message: 'Tag deleted successfully' };
  }
}
