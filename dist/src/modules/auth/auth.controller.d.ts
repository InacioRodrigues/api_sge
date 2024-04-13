import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    getProfileToken(email: string, password: string): Promise<{
        token: string;
        message: string;
    }>;
    getProfile(req: any): Promise<any>;
    login(req: any, email: string, password: string): Promise<{
        user: {
            id: string;
            email: string;
            password: string;
            isAdmin: boolean;
        };
        token: string;
        message: string;
    }>;
    updateUser(id: number, email: string, password: string): Promise<{
        user: {
            id: string;
            email: string;
            password: string;
            isAdmin: boolean;
        };
        message: string;
    }>;
    deleteUser(id: number): Promise<{
        user: User;
        message: string;
    }>;
    findAllUsers(): Promise<{
        users: User[];
    }>;
    register(email: string, password: string): Promise<{
        user: {
            id: string;
            email: string;
            password: string;
            isAdmin: boolean;
        };
        message: string;
    }>;
    logout(req: any): Promise<{
        message: string;
    }>;
}
