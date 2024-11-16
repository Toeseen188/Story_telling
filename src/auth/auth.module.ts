import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UsersModule, 
    PassportModule, 
    JwtModule.register({
      secret: 'your-secret-key', // Replace with a strong secret key
      signOptions: { expiresIn: '1d' }, // Token expiration time
    }),
  ],
  providers: [AuthService, JwtStrategy], // Include JwtStrategy
  controllers: [AuthController],
})
export class AuthModule {}