import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersRepository;
    private jwtService;
    constructor(usersRepository: Repository<User>, jwtService: JwtService);
    signUp(createUserDto: CreateUserDto): Promise<User>;
    signIn(createUserDto: CreateUserDto): Promise<{
        accessToken: string;
    }>;
}
