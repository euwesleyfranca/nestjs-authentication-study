import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './jwt/jwt.strategy';
@Injectable()
export class AuthRepository {
  constructor(
    private jwtService: JwtService,
    private jwtStrategy: JwtStrategy,
  ) {}

  async signIn(peopleId, mail): Promise<{ accessToken: string }> {
    const payload = { peopleId, mail };
    const jwtGenerate = await this.jwtStrategy.validate(payload);
    const accessToken: string = await this.jwtService.sign(jwtGenerate);

    return { accessToken };
  }
}
