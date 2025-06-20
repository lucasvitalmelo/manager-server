import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TattooTypeService } from './tattoo-type.service';
import { CreateTattooTypeDto } from './dto/create-tattoo-type.dto';
import { UpdateTattooTypeDto } from './dto/update-tattoo-type.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('tattoo-type')
export class TattooTypeController {
  constructor(private readonly tattooTypeService: TattooTypeService) { }

  @Post()
  create(@Body() createTattooTypeDto: CreateTattooTypeDto) {
    return this.tattooTypeService.create(createTattooTypeDto);
  }

  @Get()
  findAll() {
    return this.tattooTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tattooTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTattooTypeDto: UpdateTattooTypeDto) {
    return this.tattooTypeService.update(+id, updateTattooTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tattooTypeService.remove(+id);
  }
}
