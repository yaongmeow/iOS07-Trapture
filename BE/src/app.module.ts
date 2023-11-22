import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostingsModule } from './postings/postings.module';
import { TimelinesModule } from './timelines/timelines.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { StorageModule } from './storage/storage.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`,
      isGlobal: true,
    }),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET, //.env에 넣어서 이용하고 싶었는데,,, 뭔가 문제가 있는지 읽어오는데 문제가 있네요ㅠㅠ
      signOptions: { expiresIn: '900s' },
    }),
    StorageModule,
    UsersModule,
    PostingsModule,
    TimelinesModule,
    AuthModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
