import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CustomerService } from './customer.service';

import { CreateCustomerDto } from './dto/create-customer.dto';
import { CustomerResponseDto } from './dto/custome-responser.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

import { ApiBody, ApiOkResponse, ApiOperation } from '@nestjs/swagger';

@UseGuards(JwtAuthGuard)
@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) { }

  @Post()
  @ApiOperation({ summary: 'Create new customer' })
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.create(createCustomerDto);
  }

  @Get()
  @ApiOperation({ summary: 'Create a new customer' })
  @ApiOkResponse({ type: [CustomerResponseDto] })
  findAll() {
    return this.customerService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve unique customer by ID' })
  @ApiOkResponse({ type: CustomerResponseDto })
  findOne(@Param('id') id: string) {
    return this.customerService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a customer by ID' })
  @ApiOkResponse({ type: CustomerResponseDto })
  @ApiBody({ type: UpdateCustomerDto })
  update(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto
  ) {
    return this.customerService.update(+id, updateCustomerDto);
  }


  @ApiOkResponse({ type: CustomerResponseDto })
  @ApiOperation({ summary: 'Delete a customer by ID' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerService.remove(+id);
  }
}
