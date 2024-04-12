import { Test, TestingModule } from '@nestjs/testing';
import { MatriculationService } from './matriculation.service';

describe('MatriculationService', () => {
  let service: MatriculationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MatriculationService],
    }).compile();

    service = module.get<MatriculationService>(MatriculationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
