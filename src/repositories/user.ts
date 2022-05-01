import {PrismaService} from '@/infra/prisma/prisma.service'
import PrismaRepositoryBase, {RepositoryBase} from '@/adapters/repository'
import User from '@/domain/model/user'
import { Injectable } from "@nestjs/common";
import UserMapper from "@/domain/mappers/user";


export interface UserRepository extends RepositoryBase<number,User> {}

@Injectable()
export default class UserRepositoryImpl extends PrismaRepositoryBase<number,User> implements UserRepository{
  constructor(private readonly p:PrismaService) {
    super(p)
  }
  protected getQuery(): any {
    return this.prisma.user
  }
  protected toDomain(persistence: any): User | null {
    return UserMapper.toDomain(persistence)
  }
  protected toPersistence(domain: User): any {
    return UserMapper.toPersistence(domain)
  }
}

