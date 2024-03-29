import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { RegisteredException } from "src/exceptions/registered.exception";
import { User, UserUpdate } from "./users.model";
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

  async editUser(userId: string, data: UserUpdate) {
    const { username, email, age, avatar, gender, _id } = await this.userModel.findByIdAndUpdate(userId , data, { new: true })
    .exec();

    return {
      username,
      email,
      age,
      avatar,
      gender,
      userId: _id,
    };
  }

  async getUserById(userId: string) {
    const { username, email, age, avatar, gender, _id } = await this.userModel.findById(userId);

    return {
      username,
      email,
      age,
      avatar,
      gender,
      userId: _id,
    };
  }

}
