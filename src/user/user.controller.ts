import { Body, Controller } from '@nestjs/common';
import { PeopleDTO } from 'src/people/dto/people.DTO';
import { UserDto } from './dto/user.DTO';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
}
