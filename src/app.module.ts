import { Module } from '@nestjs/common';
import { PersonModule } from './person/person.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PostsModule } from './posts/posts.module';
import { JwtAuthGuard } from './auth/jwt/jwt.guards';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [PersonModule, AuthModule, UserModule, PostsModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
