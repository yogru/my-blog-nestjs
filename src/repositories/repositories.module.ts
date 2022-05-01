import { Module } from '@nestjs/common';
import {InfraModule} from '@/infra/infra.module'
import UserRepositoryImp ,{UserRepository} from "@/repositories/user";
import UserFakeRepositoryImpl from "../../test/repositories/user";

@Module({
  imports: [InfraModule],
  controllers: [],
  providers: [
    {
      provide:"UserRepository", useClass: UserRepositoryImp
    }
  ],
  exports: [UserRepositoryImp]
})
export class RepositoriesModule {}
