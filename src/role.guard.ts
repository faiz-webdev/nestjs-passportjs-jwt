import { CanActivate, ExecutionContext } from '@nestjs/common';

export class RoleGuard implements CanActivate {
  private rolePassed: string;

  constructor(role: string) {
    this.rolePassed = role;
  }

  canActivate(context: ExecutionContext): boolean {
    const ctx = context.switchToHttp();
    const reques: any = ctx.getRequest<Request>();

    return this.rolePassed == reques.user.role;
  }
}
