import {
  Body,
  Controller,
  Get,
  Logger,
  Post,
  Put,
  Request,
  UseGuards,
} from "@nestjs/common";
import * as bcrypt from "bcrypt";

import { UsersService } from "./users.service";
import { AuthenticatedGuard } from "src/auth/authenticated.guard";
import { LocalAuthGuard } from "../auth/local.auth.guard";
import { UserUpdate } from "./users.model";
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  //post /registration
  @Post("/registration")
  async addUser(
    @Body("password") userPassword: string,
    @Body("username") userName: string,
    @Body("email") userEmail: string
  ) {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(userPassword, saltOrRounds);

    const result = await this.usersService.insertUser(
      userName,
      hashedPassword,
      userEmail
    );

    return { message: "Successfully registered! Login now" };
  }

  @UseGuards(LocalAuthGuard)
  //post /login
  @Post("/login")
  login(@Request() req): any {
    return req.user;
  }

  //Get / protected
  @UseGuards(AuthenticatedGuard)
  @Get("/protected")
  async getHello(@Request() req) {
    const user = await this.usersService.getUserById(req.user._id);

    return user;
  }

  //Put /edit
  @UseGuards(AuthenticatedGuard)
  @Put("/edit")
  async editUser(@Request() req, @Body() body: UserUpdate) {
    Logger.warn(req.user);

    const updatedUser = await this.usersService.editUser(
      req.user.username,
      body
    );
    return updatedUser;
  }

  //get /logout
  @Get("/logout")
  logout(@Request() req): any {
    req.session.destroy();
    return { message: "The session has ended" };
  }
}
