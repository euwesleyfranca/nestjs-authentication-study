import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { PeopleModule } from './people/people.module';
import { MusicModule } from './music/music.module';
import { UserModule } from './user/user.module';
import { AuthenticationController } from './authentication/authentication.controller';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      database: 'musicstock',
      username: 'root',
      password: 'root',
      autoLoadEntities: true,
      synchronize: true,
    }),
    MusicModule,
    PeopleModule,
    UserModule,
    AuthenticationModule,
  ],
  controllers: [],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
