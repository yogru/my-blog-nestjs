// @ts-ignore

import {PrismaService} from '@/infra/prisma/prisma.service'
import PrismaRepositoryBase, {RepositoryBase} from '@/domain/repositories/base'
import User from '@/domain/model/user'

export interface UserRepository extends RepositoryBase<number,User> {}


export default class UserRepositoryImpl extends PrismaRepositoryBase<number,User> implements UserRepository{
  constructor(p:PrismaService) {
    super(p)
  }
  protected getQuery(): any {
    return this.prisma.user
  }
}