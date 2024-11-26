import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {
    super({
<<<<<<< HEAD
      secretOrKey: 'your-secret-key', // Replace with a strong secret key
=======
      secretOrKey: 'qYHQ6jPyK4xYZ0cD0UafMeJQfRATGP4q9Yzlxxo4IhA=', // strong secret key - generated with "openssl rand -base64 32"
>>>>>>> b06e39afff7c8bd279492fab17e567b4c10cd262
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: { username: string }) {
    const { username } = payload;
    const user = await this.usersRepository.findOneBy({ username });

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}