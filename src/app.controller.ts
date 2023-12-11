import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { RoleGuard } from './role.guard';
import { CONSTANTS } from './constants';

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
  @UseGuards(AuthGuard('jwt'), new RoleGuard(CONSTANTS.ROLES.ANDROID_DEVELOPER))
  androidDeveloperData(): string {
    return 'android-developer';
  }

  @Get('/web-developer')
  @UseGuards(AuthGuard('jwt'), new RoleGuard(CONSTANTS.ROLES.WEB_DEVELOPER))
  webDeveloperData(): string {
    return 'web-developer';
  }
}
