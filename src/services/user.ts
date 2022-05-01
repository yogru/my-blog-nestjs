import { Injectable } from "@nestjs/common";
import { PrismaService } from '@/infra/prisma/prisma.service'
import UserRepositoryImpl, {UserRepository} from '@/repositories/user'
import { Prisma } from "@prisma/client";
import UserDomain from '@/domain/model/user'

export class CreateUserForm {
  account: string
  password: string
  name: string
}


@Injectable()
export default class UserService {
  constructor( private readonly userRepo:UserRepositoryImpl ) {}

  public async createUser(c:CreateUserForm): Promise<number> {
    // CreateUserForm 검증 추가 해야함 귀찮아서 스킵.
    const userDomain:UserDomain = {
      account: c.account,
      password: c.password,
      name: c.name
    }
    return this.userRepo.save(userDomain)
  }

}

