import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/user/user.repository';
import { AuthDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interface/auth.interface';
import { JwtStrategy } from './jwt/jwt.strategy';

@Injectable()
export class AuthRepository {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
    private jwtStrategy: JwtStrategy,
  ) {}

  async signIn(authDto: AuthDto): Promise<{ accessToken: string }> {
    const { email, password } = authDto;
    const payload: JwtPayload = { email, password };
    const validate = await this.jwtStrategy.validate(payload);
    const accessToken: string = await this.jwtService.sign(validate);

    return { accessToken };
  }

  async signOut() {
    //const verifyToken = await this.jwtService.verify();
  }
}
