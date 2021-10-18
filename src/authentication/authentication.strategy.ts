import { UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from 'src/user/entity/user.entity';
import { UserRepository } from 'src/user/user-repository';
import { AuthenticationPayload } from './authentication.interface';

export class AuthenticationStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {
    super({
      secretOrKey: 'musicstock',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(authenticationPayload: AuthenticationPayload): Promise<User> {
    const { mail } = authenticationPayload;

    const user: User = await this.userRepository.findOne({ mail });
    console.log(user);

    if (!user) {
      console.log('Usuário inválido');
      throw new UnauthorizedException();
    }

    return user;
  }
}
