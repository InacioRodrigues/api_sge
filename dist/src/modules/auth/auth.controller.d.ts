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
            isAdmin: boolean;
            email: string;
            password: string;
        };
        token: string;
        message: string;
    }>;
    updateUser(id: string, email: string, password: string): Promise<{
        user: {
            id: string;
            isAdmin: boolean;
            email: string;
            password: string;
        };
        message: string;
    }>;
    deleteUser(id: string): Promise<{
        user: {
            id: string;
            isAdmin: boolean;
            email: string;
            password: string;
        };
        message: string;
    }>;
    findAllUsers(): Promise<{
        users: {
            id: string;
            isAdmin: boolean;
            email: string;
            password: string;
        }[];
    }>;
    register(email: string, password: string): Promise<{
        user: {
            id: string;
            isAdmin: boolean;
            email: string;
            password: string;
        };
        message: string;
    }>;
    logout(req: any): Promise<{
        message: string;
    }>;
}
