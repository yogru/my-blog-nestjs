import {User as UserPersistence} from '@prisma/client'
import UserDomain from '@/domain/model/user'

export default class UserMapper{
  public static toDomain(u:UserPersistence): UserDomain | null {
    if( !u ) {
      return null
    }
    return new UserDomain({
      id: u.id,
      deleted: u.deleted,
      account: u.account,
      password: u.password,
      name: u.name,
      createdAt: u.createdAt,
      updatedAt: u.updatedAt,
    })
  }

  public static toPersistence(u:UserDomain): any {
    return {
      id: u.id,
      deleted: u.deleted,
      account: u.account,
      password: u.password,
      name: u.name,
      createdAt: u.createdAt,
      updatedAt: u.updatedAt,
    }
  }
}