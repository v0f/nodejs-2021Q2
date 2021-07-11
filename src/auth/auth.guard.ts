import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const { authorization: authHeader } = request.headers;
    if (authHeader) {
      const [type, token] = authHeader.split(' ');
      if (type === 'Bearer' && this.jwtService.verify(token)) {
        return true;
      }
    }
    throw new UnauthorizedException();
  }
}
