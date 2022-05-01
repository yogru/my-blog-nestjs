import { Test, TestingModule } from '@nestjs/testing';
import { InfraModule } from '@/infra/infra.module'
import { ServicesModule } from '@/services/services.module'
import UserService from '@/services/user'



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

  it('create user', async () => {
    // async await 테스트 적용하는거 찾아야됨..
    // unique 여러가지 생성 실패 패턴 에러처리를 어떻게 해야할까?
    expect(service).toBeDefined();
    const userId:number = await  service.createUser({
      account: '권영복234311',
      password: 'test',
      name: 'test11',
    })
    expect(userId).toBeDefined()
    expect(userId).toEqual(expect.any(Number));
  });
});
