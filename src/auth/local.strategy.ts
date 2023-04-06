import { Injectable } from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor() {
    super({ usernameField: 'email' });
  }
  async validate(email: string, password: string) {
    console.log('in LocalSrategy');
    console.log(`email: ${email}, password: ${password}`)
    return 'local.strategy - validate return value';
  }
}