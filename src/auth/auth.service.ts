import { Injectable, Logger, NotAcceptableException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { LoginException } from '../exceptions/login.exception';

import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.getUser(username);
    
    if (!user) throw new LoginException();

    const passwordValid = await bcrypt.compare(password, user.password);

    if (user && passwordValid) {
      return {
        userId: user.id,
        username: user.username,
        email: user.email,
        message: 'User successfully logged in!'
      };
    }

    throw new LoginException();
  }
}