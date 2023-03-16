/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { VideosController } from './videos/videos.controller';
import { VideosService } from './videos/videos.service';
import { Video } from 'src/typeorm/entities/Video';

@Module({
  imports: [TypeOrmModule.forFeature([Video])],
  controllers: [VideosController],
  providers: [VideosService]
})
export class VideosModule { }
