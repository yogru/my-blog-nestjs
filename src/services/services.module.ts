import { Module } from '@nestjs/common';
import { RepositoriesModule } from '@/repositories/repositories.module'
import UserService from '@/services/user'
import UserRepositoryImpl from "@/repositories/user";

@Module({
  imports: [RepositoriesModule],
  controllers: [],
  providers: [UserService, {
    provide:"UserRepository", useClass: UserRepositoryImpl
  }],
})
export class ServicesModule {}
