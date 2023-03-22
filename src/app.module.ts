/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideosModule } from './app/modules/videos/videos.module';
import { CommentsModule } from './app/modules/comments/comments.module';
import { UsersModule } from './app/modules/users/users.module';
import { UsersService } from './app/services/users/users.service';

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
  }), VideosModule, CommentsModule, UsersModule],
  controllers: [],
  providers: [UsersService],
})
export class AppModule { }
