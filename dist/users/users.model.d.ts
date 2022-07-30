import * as mongoose from "mongoose";
export declare const UserSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
    username: string;
    password: string;
    email: string;
    gender?: string;
    age?: number;
    avatar?: string;
}>;
export interface User extends mongoose.Document {
    _id: string;
    username: string;
    password: string;
    email: string;
    gender?: string;
    age?: number;
    avatar?: any;
}
export interface UserUpdate extends mongoose.Document {
    username?: string;
    email?: string;
    gender?: string;
    age?: number;
    avatar?: any;
}
