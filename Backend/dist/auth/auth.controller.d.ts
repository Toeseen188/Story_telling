import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { User } from '../entities/user.entity';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(createUserDto: CreateUserDto): Promise<User>;
    signIn(createUserDto: CreateUserDto): Promise<{
        accessToken: string;
    }>;
}
