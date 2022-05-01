import { Inject, Injectable } from "@nestjs/common";
import UserRepositoryImpl, {UserRepository} from '@/repositories/user'
import UserDomain ,{UserProps}from '@/domain/model/user'

export class CreateUserForm {
  account: string
  password: string
  name: string
}


@Injectable()
export default class UserService {
  constructor( @Inject("UserRepository") private readonly userRepo: UserRepository ) {}

  public async createUser(c:CreateUserForm): Promise<number> {
    // CreateUserForm 검증 추가 해야함 귀찮아서 스킵.
    // 여기서는 필수 값 같은 검증

    const userProps:UserProps = {
      account: c.account,
      password: c.password,
      name: c.name
    }
    const userDomain = new UserDomain(userProps)
    userDomain.validate()

    return this.userRepo.save(userDomain)
  }

  public async getUserById(id:number):Promise<UserDomain | undefined> {
    return this.userRepo.findById(id)
  }

}

