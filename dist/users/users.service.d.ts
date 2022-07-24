import { Model } from "mongoose";
import { User, UserUpdate } from "./users.model";
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    getUser(userName: string): Promise<User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    insertUser(userName: string, password: string, email: string): Promise<User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    editUser(userId: string, data: UserUpdate): Promise<{
        username: string;
        email: string;
        age: number;
        avatar: string;
        gender: string;
        userId: string & import("mongoose").Types.ObjectId;
    }>;
    getUserById(id: string): Promise<User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
