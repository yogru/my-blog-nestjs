import { Module } from '@nestjs/common';
import UserFakeRepositoryImpl from "./user";


@Module({
  imports: [],
  controllers: [],
  providers: [UserFakeRepositoryImpl],
  exports: [UserFakeRepositoryImpl]
})
export class RepositoriesTestModule {}
