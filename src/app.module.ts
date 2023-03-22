/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// custom modules
import { VideosModule } from './app/modules/videos/videos.module';
import { CommentsModule } from './app/modules/comments/comments.module';
import { UsersModule } from './app/modules/users/users.module';
import { AuthModule } from './app/modules/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '12300',
    database: 'video-thingy',
    entities: ["dist/**/*.js"],
    synchronize: true,
  }), VideosModule, CommentsModule, UsersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
