import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { GoogleUser } from './types';
// import { GoogleUser } from '../types/user';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) { }

  generateJwt(user: GoogleUser) {
    const payload = {
      sub: user.id,
      email: user.email,
      name: user.name,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

}
