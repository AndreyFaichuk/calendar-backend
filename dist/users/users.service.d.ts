import { Model, Types } from "mongoose";
import { User, UserUpdate } from "./users.model";
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    getUser(userName: string): Promise<User & {
        _id: Types.ObjectId;
    }>;
    insertUser(userName: string, password: string, email: string): Promise<User & {
        _id: Types.ObjectId;
    }>;
    editUser(userId: string, data: UserUpdate): Promise<{
        username: string;
        email: string;
        age: number;
        avatar: string;
        gender: string;
        userId: string & Types.ObjectId;
    }>;
    getUserById(userId: string): Promise<{
        username: string;
        email: string;
        age: number;
        avatar: string;
        gender: string;
        userId: string & Types.ObjectId;
    }>;
}
