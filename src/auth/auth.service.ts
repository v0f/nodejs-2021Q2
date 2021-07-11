import bcrypt from 'bcrypt';
import { Injectable, ForbiddenException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../resources/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async getToken(login: string, password: string) {
    const user = await this.usersService.findByLogin(login);
    if (!user) {
      throw new ForbiddenException();
    }
    const passOk = bcrypt.compare(password, user.password);
    if (!passOk) {
      throw new ForbiddenException();
    }

    const token = this.jwtService.sign({
      userId: user.id,
      login,
      sub: user.id,
    });
    return { token };
  }
}
