import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  auth(@Body('login') login: string, @Body('password') password: string) {
    return this.authService.getToken(login, password);
  }
}
