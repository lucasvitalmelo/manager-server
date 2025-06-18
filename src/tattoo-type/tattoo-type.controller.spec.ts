import { Test, TestingModule } from '@nestjs/testing';
import { TattooTypeController } from './tattoo-type.controller';
import { TattooTypeService } from './tattoo-type.service';

describe('TattooTypeController', () => {
  let controller: TattooTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TattooTypeController],
      providers: [TattooTypeService],
    }).compile();

    controller = module.get<TattooTypeController>(TattooTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
