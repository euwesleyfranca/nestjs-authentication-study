import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(private authRepository: AuthRepository) {}

  async signIn(authDto: AuthDto) {
    return this.authRepository.signIn(authDto);
  }
}
