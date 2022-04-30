import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { InfraModule } from '../infra/infra.module';
import { PrismaService } from '../infra/prisma/prisma.service';
import { UserController } from './user.controller';

@Module({
  imports: [InfraModule],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
