import { UsersService } from "./users.service";
import { UserUpdate } from "./users.model";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    addUser(userPassword: string, userName: string, userEmail: string): Promise<{
        message: string;
    }>;
    login(req: any): Promise<{
        username: string;
        email: string;
        age: number;
        avatar: string;
        gender: string;
        userId: string & import("mongoose").Types.ObjectId;
    }>;
    getHello(req: any): Promise<{
        username: string;
        email: string;
        age: number;
        avatar: string;
        gender: string;
        userId: string & import("mongoose").Types.ObjectId;
    }>;
    editUser(req: any, body: UserUpdate): Promise<{
        username: string;
        email: string;
        age: number;
        avatar: string;
        gender: string;
        userId: string & import("mongoose").Types.ObjectId;
    }>;
    logout(req: any): any;
}
