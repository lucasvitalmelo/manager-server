import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';
import { GoogleUser } from './types';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req: Request) => {
          const token = (req.cookies?.access_token ?? null) as string | null;
          return token;
        },
      ]),
      ignoreExpiration: false,
      secretOrKey: process.env.SECRETKEY!,
    });
  }

  validate(payload: GoogleUser) {
    return { email: payload.email, name: payload.name };
  }
}
