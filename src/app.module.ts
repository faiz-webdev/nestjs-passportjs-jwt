import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './user/auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    AuthModule,
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.prod.env',
    }),
    TypeOrmModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
