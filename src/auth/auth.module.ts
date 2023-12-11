import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../user/user.module';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule,
    UserModule,
    JwtModule.register({
      secret: 'secret',
      signOptions: {
        expiresIn: '60m',
      },
    }),
  ],
  controllers: [],
  providers: [LocalStrategy, AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
