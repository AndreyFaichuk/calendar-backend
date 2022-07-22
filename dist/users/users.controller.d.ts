import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    addUser(userPassword: string, userName: string, userEmail: string): Promise<{
        message: string;
    }>;
    login(req: any): any;
    getHello(req: any, userName: string): Promise<(import("./users.model").User & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    logout(req: any): any;
}
