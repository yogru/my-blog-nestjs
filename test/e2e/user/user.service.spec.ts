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

  it('create user', async () => {
    // unique 여러가지 생성 실패 패턴 에러처리를 어떻게 해야할까?
    // Fake 객체를 만들어야하나.
    expect(service).toBeDefined();

    const userId:number = await  service.createUser({
      account: '권311',
      password: 'test',
      name: 'test11',
    })
    expect(userId).toBeDefined()
    expect(userId).toEqual(expect.any(Number));
  });
});
