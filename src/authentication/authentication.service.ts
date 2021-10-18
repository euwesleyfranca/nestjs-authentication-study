import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserDto } from 'src/user/dto/user.DTO';
import { UserRepository } from 'src/user/user-repository';
import * as bcript from 'bcrypt';
import { AuthenticationPayload } from './authentication.interface';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthenticationService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}
  async userSignIn(userDTO: UserDto): Promise<{ accessToken: string }> {
    const { mail, password } = userDTO;

    const user = await this.userRepository.findOne({ mail });

    console.log(user);

    if (user && (await bcript.compare(password, user.password))) {
      const payload: AuthenticationPayload = { mail };
      const accessToken: string = await this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException('Usuário ou senha inválidos');
    }
  }
}
