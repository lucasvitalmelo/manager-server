import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TagsService } from './tags.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { TagResponseDto } from './dto/tag-response.dto';

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiTags('Tags')
@Controller('tags')
export class TagsController {
  constructor(private tagsService: TagsService) { }

  @Post()
  @ApiOperation({ summary: 'Create a new tag' })
  @ApiResponse({
    status: 201,
    description: 'Tag successfully created',
    type: TagResponseDto,
  })
  create(@Body() createTagDto: CreateTagDto) {
    return this.tagsService.create(createTagDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all tags' })
  @ApiResponse({
    status: 200,
    description: 'Returns a list of all tags',
    type: [TagResponseDto],
  })
  findAll() {
    return this.tagsService.findAll();
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a tag by ID' })
  @ApiResponse({
    status: 200,
    description: 'Tag successfully deleted',
  })
  @ApiResponse({
    status: 404,
    description: 'Tag not found',
  })
  remove(@Param('id') id: string) {
    return this.tagsService.remove(+id);
  }
}
