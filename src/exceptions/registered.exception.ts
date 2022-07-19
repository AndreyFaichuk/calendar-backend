import { HttpException, HttpStatus } from '@nestjs/common';

export class RegisteredException extends HttpException {
    constructor() {
      super('User already registered!', 406);
    }
  }