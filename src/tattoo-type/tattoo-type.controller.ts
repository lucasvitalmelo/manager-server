import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TattooTypeService } from './tattoo-type.service';
import { CreateTattooTypeDto } from './dto/create-tattoo-type.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { TattooTypeResponseDto } from './dto/tattoo-type-response.dto';

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiTags('Tattoo Type')
@Controller('tattoo-type')
export class TattooTypeController {
  constructor(private readonly tattooTypeService: TattooTypeService) { }

  @Post()
  @ApiOperation({ summary: 'Create a new tattoo type' })
  @ApiResponse({
    status: 201,
    description: 'Tattoo type successfully created',
    type: TattooTypeResponseDto,
  })
  create(@Body() createTattooTypeDto: CreateTattooTypeDto) {
    return this.tattooTypeService.create(createTattooTypeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all tattoo types' })
  @ApiResponse({
    status: 200,
    description: 'Returns a list of all tattoo types',
    type: [TattooTypeResponseDto],
  })
  findAll() {
    return this.tattooTypeService.findAll();
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a tattoo type by ID' })
  @ApiResponse({
    status: 200,
    description: 'Tattoo type successfully deleted',
  })
  @ApiResponse({
    status: 404,
    description: 'Tattoo type not found',
  })
  remove(@Param('id') id: string) {
    return this.tattooTypeService.remove(+id);
  }
}
