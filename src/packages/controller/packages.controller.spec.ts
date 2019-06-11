import { Test, TestingModule } from '@nestjs/testing';
import { PackagessController } from '../controller/packages.controller';

describe('Packages Controller', () => {
  let controller: PackagessController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PackagessController],
    }).compile();

    controller = module.get<PackagessController>(PackagessController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
