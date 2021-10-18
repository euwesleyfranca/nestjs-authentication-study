import { Body, Controller, Post } from '@nestjs/common';
import { UserDto } from 'src/user/dto/user.DTO';
import { AuthenticationService } from './authentication.service';

@Controller('authentication')
export class AuthenticationController {
  constructor(private authenticationService: AuthenticationService) {}
  @Post('/sign-in')
  userSignIn(@Body() userDTO: UserDto): Promise<{ accessToken: string }> {
    return this.authenticationService.userSignIn(userDTO);
  }
}
