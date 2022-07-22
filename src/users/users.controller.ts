import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { UsersService } from './users.service';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { LocalAuthGuard } from '../auth/local.auth.guard';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  
  //post /registration
  @Post('/registration')
  async addUser(
    @Body('password') userPassword: string,
    @Body('username') userName: string,
    @Body('email') userEmail: string,
  ) {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(userPassword, saltOrRounds);

    const result = await this.usersService.insertUser(
      userName,
      hashedPassword,
      userEmail
    );

    return { message:'Successfully registered! Login now' }
  }

  @UseGuards(LocalAuthGuard)
  //post /login
  @Post('/login')
  login(@Request() req): any {
    return req.user
  }

  //post /verify
  @UseGuards(AuthenticatedGuard)
  @Post('/verify')
  async getHello(
    @Request() req,
    @Body('username') userName: string) {

    return await this.usersService.getVerifiedUser(userName)
  }

  //get / logout
  @Get('/logout')
  logout(@Request() req): any {
    req.session.destroy();
    return { message: 'The session has ended' }
}

}