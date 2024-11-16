import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../users/dto/create-user.dto';
//import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt'; // Import JwtService

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService, // Inject JwtService
  ) {}

  async signUp(createUserDto: CreateUserDto): Promise<User> {
    const { username, email, password } = createUserDto;
    //const salt = await bcrypt.genSalt();
    //const hashedPassword = await bcrypt.hash(password, salt);

    const user = this.usersRepository.create({
      username,
      email,
      //password: hashedPassword,
      password: password,
    });

    try {
      return await this.usersRepository.save(user);
    } catch (error) {
      // Handle duplicate username or email errors
      if (error.code === '23505') {
        throw new UnauthorizedException('Username or email already exists');
      }
      throw error; // Re-throw other errors
    }
  }

  async signIn(createUserDto: CreateUserDto): Promise<{ accessToken: string }> {
    const { username, password } = createUserDto;
    const user = await this.usersRepository.findOneBy({ username });

    if (user && (password === user.password)) { //&& (await bcrypt.compare(password, user.password))
      const payload = { username };
      const accessToken = await this.jwtService.sign(payload); // Generate JWT
      return { accessToken };
    } else {
      throw new UnauthorizedException('Invalid credentials');
    }
  }
}