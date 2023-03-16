/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { VideosController } from './videos/videos.controller';
import { VideosService } from './videos/videos.service';

@Module({
  controllers: [VideosController],
  providers: [VideosService]
})
export class VideosModule { }
