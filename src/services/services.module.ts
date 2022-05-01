import { Module } from '@nestjs/common';
import {InfraModule} from '@/infra/infra.module'
import UserService from '@/services/user'

@Module({
  imports: [InfraModule],
  controllers: [],
  providers: [UserService],
})
export class ServicesModule {}
