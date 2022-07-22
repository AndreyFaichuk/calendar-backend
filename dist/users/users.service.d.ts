import { Model } from 'mongoose';
import { User } from './users.model';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    getUser(userName: string): Promise<User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    insertUser(userName: string, password: string, email: string): Promise<User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
