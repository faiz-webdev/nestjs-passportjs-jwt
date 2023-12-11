import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './user/auth/auth.service';

@Controller('app')
export class AppController {
  constructor(private readonly authserService: AuthService) {}

  @Post('/login')
  @UseGuards(AuthGuard('local'))
  login(@Request() req: any): string {
    const token = this.authserService.generateToken(req.user);
    return token;
  }

  @Get('/android-developer')
  @UseGuards(AuthGuard('jwt'))
  androidDeveloperData(): string {
    return 'android-developer';
  }
}
