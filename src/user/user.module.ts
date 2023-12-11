import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { ConfigService } from '@nestjs/config';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {
  constructor(private readonly configService: ConfigService) {
    // console.log('user module', configService.get<Number>('PORT'));
    // console.log('user module', configService.get<string>('NAME'));
  }
}
