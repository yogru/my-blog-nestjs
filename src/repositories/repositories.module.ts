import { Module } from '@nestjs/common';
import {InfraModule} from '@/infra/infra.module'
import UserRepository from "@/repositories/user";

@Module({
  imports: [InfraModule],
  controllers: [],
  providers: [UserRepository],
  exports: [UserRepository]
})
export class RepositoriesModule {}
