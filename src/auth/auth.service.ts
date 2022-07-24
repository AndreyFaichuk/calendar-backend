import { Injectable, Logger, NotAcceptableException } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { LoginException } from "../exceptions/login.exception";

import { UsersService } from "src/users/users.service";

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.getUser(username);

    if (!user) throw new LoginException();

    const passwordValid = await bcrypt.compare(password, user.password);

    Logger.error(user);

    if (user && passwordValid) {
      return {
        age: user.age,
        avatar: user.avatar,
        gender: user.gender,
        userId: user.id,
        username: user.username,
        email: user.email,
      };
    }
    throw new LoginException();
  }
}
