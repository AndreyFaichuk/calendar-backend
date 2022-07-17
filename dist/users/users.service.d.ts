import { Model } from 'mongoose';
import { User } from './users.model';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    insertUser(userName: string, password: string, email: string): Promise<User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getUser(userName: string): Promise<User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
