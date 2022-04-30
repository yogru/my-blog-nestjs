import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { InfraModule } from '../infra/infra.module';

describe('UserService', () => {
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
  it('create user', () => {
    expect(service).toBeDefined();
    service.createUser({
      account: 'test',
      password: 'test',
      name: 'test11',
    });
  });
});
