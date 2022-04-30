import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InfraModule } from './infra/infra.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [InfraModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
