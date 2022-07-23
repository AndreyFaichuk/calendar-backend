import { Injectable, Logger, NotAcceptableException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { RegisteredException } from "src/exceptions/registered.exception";
import { User } from "./users.model";
@Injectable()
export class UsersService {
  constructor(@InjectModel("user") private readonly userModel: Model<User>) {}

  async getUser(userName: string) {
    const username = userName.toLowerCase();

    const user = await this.userModel.findOne({ username });

    return user;
  }

  async insertUser(userName: string, password: string, email: string) {
    const username = userName.toLowerCase();

    const potentialUser = await this.getUser(username);

    if (!potentialUser) {
      const newUser = new this.userModel({
        username,
        password,
        email,
      });

      await newUser.save();

      return newUser;
    }

    throw new RegisteredException();
  }
}
