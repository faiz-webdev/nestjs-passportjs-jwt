import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [],
  controllers: [],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {
  constructor(private readonly configService: ConfigService) {
    // console.log('user module', configService.get<Number>('PORT'));
    // console.log('user module', configService.get<string>('NAME'));
  }
}
