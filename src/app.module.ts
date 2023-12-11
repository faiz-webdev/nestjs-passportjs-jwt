import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './user/auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    AuthModule,
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.prod.env',
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
