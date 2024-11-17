import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity'

@Module({
  imports: [
    UsersModule,  
    TypeOrmModule.forFeature([User]),
    PassportModule, 
    JwtModule.register({
      secret: 'qYHQ6jPyK4xYZ0cD0UafMeJQfRATGP4q9Yzlxxo4IhA=', // Replace with a strong secret key
      signOptions: { expiresIn: '7d' }, // Token expiration time
    }),
  ],
  providers: [AuthService, JwtStrategy], // Include JwtStrategy
  controllers: [AuthController],
})
export class AuthModule {}