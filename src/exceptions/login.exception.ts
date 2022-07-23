import { HttpException } from "@nestjs/common";

export class LoginException extends HttpException {
  constructor() {
    super("User not found!", 406);
  }
}
