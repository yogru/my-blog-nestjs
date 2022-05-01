import { Module } from '@nestjs/common';
import {InfraModule} from '@/infra/infra.module'
import UserRepositoryImp from "@/repositories/user";
import UserRepositoryImpl from "@/repositories/user";

@Module({
  imports: [InfraModule],
  controllers: [],
  providers: [{
    provide:"UserRepository", useClass: UserRepositoryImpl
  }],
  exports: ["UserRepository"]
})
export class RepositoriesModule {}
