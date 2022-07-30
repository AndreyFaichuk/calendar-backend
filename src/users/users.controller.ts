import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Request,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { FileInterceptor } from "@nestjs/platform-express";

import { UsersService } from "./users.service";
import { AuthenticatedGuard } from "src/auth/authenticated.guard";
import { LocalAuthGuard } from "../auth/local.auth.guard";
import { UserUpdate } from "./users.model";
import { storage } from "./helpers";
import { join } from "path";

import { diskStorage } from "multer";
import * as path from "path";
import { v4 as uuidv4 } from "uuid";
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

    await this.usersService.insertUser(
      userName,
      hashedPassword,
      userEmail
    );
    return { message: "Successfully registered! Login now" };
  }

  @UseGuards(LocalAuthGuard)
  //post /login
  @Post("/login")
  async login(@Request() req) {
    return await this.usersService.getUserById(req.user.userId)
  }

  //Get / protected
  @UseGuards(AuthenticatedGuard)
  @Get("/protected")
  async getHello(@Request() req) {
    return await this.usersService.getUserById(req.user.userId)
  }

  //Put /edit
  @UseGuards(AuthenticatedGuard)
  @Put("/edit")
  async editUser(@Request() req, @Body() body: UserUpdate) {
    return await this.usersService.editUser(
      req.user.userId,
      body
    );
  }

  //Post /avatar
  @UseGuards(AuthenticatedGuard)
  @Post("/avatar")
  @UseInterceptors(FileInterceptor('file', storage))
  async uploadFile(@UploadedFile() file, @Request() req)  {
    return await this.usersService.editUser(
      req.user.userId,
      { avatar: file.filename } as any
    );
  }

   //Get /avatar
   @UseGuards(AuthenticatedGuard)
   @Get("/avatar/:avatarName")
   async findAvatar(@Param('avatarName') avatarName, @Res() res)  { 
     return res.sendFile(join(process.cwd(), './uploads/avatars/' + avatarName))
   }
  
  //get /logout
  @Get("/logout")
  logout(@Request() req): any {
    req.session.destroy();
    return { message: "The session has ended" };
  }
}
