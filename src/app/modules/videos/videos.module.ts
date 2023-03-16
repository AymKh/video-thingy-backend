/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { VideosController } from './videos.controller';
import { VideosService } from '../../services/videos/videos.service';
import { Video } from 'src/app/models/Video';

@Module({
  imports: [TypeOrmModule.forFeature([Video])],
  controllers: [VideosController],
  providers: [VideosService]
})
export class VideosModule { }
