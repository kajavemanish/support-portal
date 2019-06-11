import { Test, TestingModule } from '@nestjs/testing';
import { ItemsHelperService } from './items-helper.service';

describe('ItemsHelperService', () => {
  let service: ItemsHelperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemsHelperService],
    }).compile();

    service = module.get<ItemsHelperService>(ItemsHelperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
