import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { GoogleStrategy } from './google.strategy';

@Module({
  imports: [PassportModule, JwtModule.register({
    secret: process.env.SECRETKEY!
  })],
  providers: [AuthService, JwtStrategy, GoogleStrategy],
  controllers: [AuthController]
})
export class AuthModule { }
