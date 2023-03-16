/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { VideosController } from './videos/videos.controller';

@Module({
  controllers: [VideosController]
})
export class VideosModule { }
