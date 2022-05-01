import { Module } from '@nestjs/common';
import { RepositoriesModule } from '@/repositories/repositories.module'
import UserService from '@/services/user'

@Module({
  imports: [RepositoriesModule],
  controllers: [],
  providers: [UserService],
})
export class ServicesModule {}
