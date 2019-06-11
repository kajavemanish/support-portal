import { Test, TestingModule } from '@nestjs/testing';
import { PackagessService } from './packages.service';

describe('PackagesService', () => {
  let service: PackagessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PackagessService],
    }).compile();

    service = module.get<PackagessService>(PackagessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
