import { Test, TestingModule } from '@nestjs/testing';
import { MatriculationController } from './matriculation.controller';
import { MatriculationService } from './matriculation.service';

describe('MatriculationController', () => {
  let controller: MatriculationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MatriculationController],
      providers: [MatriculationService],
    }).compile();

    controller = module.get<MatriculationController>(MatriculationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
