import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from 'src/user/user-repository';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { AuthenticationStrategy } from './authentication.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'musicstock',
      signOptions: {
        expiresIn: 3600,
      },
    }),
    TypeOrmModule.forFeature([UserRepository]),
  ],
  providers: [AuthenticationService, AuthenticationStrategy],
  controllers: [AuthenticationController],
  exports: [AuthenticationStrategy, PassportModule],
})
export class AuthenticationModule {}
