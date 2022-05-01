import User from '@/domain/model/user'
import { Injectable } from "@nestjs/common";
import {UserRepository} from '@/repositories/user'

@Injectable()
export default class UserFakeRepositoryImpl  implements UserRepository{
  private userList: User []

  constructor() {
    this.userList = [
      new User({
        id: 1,
        account: "테스트에용",
        name: "테스트에용",
        password: "테스트에용"
      })
    ]
  }
  public async findById(id: number): Promise<User | undefined> {
    const userList = this.userList.filter(u=>u.id === id)
    return userList[0]
  }

  public async save(domain: User): Promise<number | undefined> {
    this.userList.push(domain)
    return this.userList.length
  }
}

