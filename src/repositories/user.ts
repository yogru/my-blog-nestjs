import {PrismaService} from '@/infra/prisma/prisma.service'
import PrismaRepositoryBase, {RepositoryBase} from '@/adapters/repository'
import User from '@/domain/model/user'
import { Injectable } from "@nestjs/common";

export interface UserRepository extends RepositoryBase<number,User> {}

@Injectable()
export default class UserRepositoryImpl extends PrismaRepositoryBase<number,User> implements UserRepository{
  constructor(private readonly p:PrismaService) {
    super(p)
  }
  protected getQuery(): any {
    return this.prisma.user
  }
}

