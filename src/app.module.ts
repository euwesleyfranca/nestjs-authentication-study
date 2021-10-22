import { Module } from '@nestjs/common';
import { PersonModule } from './person/person.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [PersonModule, AuthModule, UserModule],
  controllers: [],
})
export class AppModule {}
