import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { Public } from 'src/decorators/setMetadata';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { LocalStrategy } from './local.strategy';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @UseGuards(LocalStrategy)
  @Post()
  signIn(@Body() authDto: AuthDto) {
    return this.authService.login(authDto);
  }

  @Post('logout')
  signOut(@Request() req): any {
    req.logout();
    console.log('logged out');
  }
}
