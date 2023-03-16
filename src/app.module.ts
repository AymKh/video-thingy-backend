/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideosModule } from './videos/videos.module';

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
  }), VideosModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
