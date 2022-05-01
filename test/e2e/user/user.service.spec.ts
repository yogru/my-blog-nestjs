import { Test, TestingModule } from '@nestjs/testing';
import {RepositoriesModule} from '../../../src/repositories/repositories.module'
import { ServicesModule } from '../../../src/services/services.module'
import UserService from '../../../src/services/user'


describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [RepositoriesModule],
      providers: [UserService],
    }).compile();
    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('invalid create user', async () => {
    try {
      const userId:number = await  service.createUser({
        account: 'kybdev.gmail.com',
        password: 't',
        name: 'test11',
      })
      expect(true).toBe(false);
    } catch (e) {
      expect(e.message).toBe("invalid email, invalid password");
    }
  });
});
