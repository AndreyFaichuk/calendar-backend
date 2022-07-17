import * as mongoose from 'mongoose';
export declare const UserSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
    username: string;
    password: string;
    email: string;
}>;
export interface User extends mongoose.Document {
    _id: string;
    username: string;
    password: string;
    email: string;
}
