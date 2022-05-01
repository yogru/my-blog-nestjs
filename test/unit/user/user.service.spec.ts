import { Test, TestingModule } from '@nestjs/testing';
import UserService from '@/services/user'
import {RepositoriesTestModule} from '../../repositories/repositories.module'
import UserFakeRepositoryImpl from '../../repositories/user'

describe('UserRepository', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [RepositoriesTestModule],
      providers: [UserService,{
        provide:"UserRepository", useClass: UserFakeRepositoryImpl
      }],
    }).compile();
    service =  module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // it('findById', async ()=>{
  //   const userId = 1
  //   const user =  await service.getUserById(userId)
  //   expect(user).toBeDefined();
  //   expect(user.id).toEqual(userId)
  // });

  it('saveUser', async ()=>{
    const newUserId = await service.createUser({
      account: "qhr33@naver.com",
      password:"1234567",
      name:"테스트4"
    })
    expect(newUserId).toBeDefined();
    expect(newUserId).toEqual(expect.any(Number));
  });

});

