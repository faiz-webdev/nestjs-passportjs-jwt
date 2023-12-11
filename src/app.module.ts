import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './user/auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AuthModule, UserModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
