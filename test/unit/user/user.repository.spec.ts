import { Test, TestingModule } from '@nestjs/testing';
import { InfraModule } from '@/infra/infra.module';
import UserService from '@/services/user'

describe('UserRepository', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [InfraModule],
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

