import * as mongoose from "mongoose";

export const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: false,
    },
    age: {
      type: Number,
      required: false,
    },
    avatar: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export interface User extends mongoose.Document {
  _id: string;
  username: string;
  password: string;
  email: string;
  gender?: string;
  age?: number;
  avatar?: string;
}

export interface UserUpdate extends mongoose.Document {
  username?: string;
  email?: string;
  gender?: string;
  age?: number;
  avatar?: string;
}
