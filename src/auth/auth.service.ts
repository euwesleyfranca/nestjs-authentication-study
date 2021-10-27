import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from 'src/user/user.repository';
import { AuthDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userRepository: UserRepository,
  ) {}

  async validateUser(authDto: AuthDto) {
    const { mail, password } = authDto;
    const user = await this.userRepository.findUserEmail(mail);

    if (user && (await bcrypt.compare(password, user.password))) {
      const payload = { peopleId: user.peopleId, mail: user.mail };
      return { accessToken: this.jwtService.sign(payload) };
    } else {
      throw new UnauthorizedException(
        'Usuário ou senha incorretos! verifique e tente novamente.',
      );
    }
  }

  async login(user: any): Promise<{ accessToken: string }> {
    const payload = { user: user.peopleId, mail: user.mail };

    return { accessToken: await this.jwtService.sign(payload) };
  }
}
