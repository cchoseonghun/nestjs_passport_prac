import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ReqUser } from './auth.decorator';

@Controller('auth')
export class AuthController {

  @Post()
  @UseGuards(AuthGuard('local'))
  async login(@ReqUser() user: any) {
    console.log(`ReqUser: `);
    console.dir(user);
    return;
  }
}
