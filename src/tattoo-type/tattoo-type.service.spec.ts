import { Test, TestingModule } from '@nestjs/testing';
import { TattooTypeService } from './tattoo-type.service';

describe('TattooTypeService', () => {
  let service: TattooTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TattooTypeService],
    }).compile();

    service = module.get<TattooTypeService>(TattooTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
