import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    addUser(userPassword: string, userName: string, userEmail: string): Promise<{
        message: string;
        userId: any;
        username: string;
        email: string;
    }>;
    login(req: any): any;
    getHello(req: any): string;
    logout(req: any): any;
}
