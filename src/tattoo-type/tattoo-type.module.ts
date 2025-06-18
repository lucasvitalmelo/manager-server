import { Module } from '@nestjs/common';
import { TattooTypeService } from './tattoo-type.service';
import { TattooTypeController } from './tattoo-type.controller';

@Module({
  controllers: [TattooTypeController],
  providers: [TattooTypeService],
})
export class TattooTypeModule {}
