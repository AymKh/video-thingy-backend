/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { VideosController } from './videos.controller';
import { VideosService } from '../../services/videos/videos.service';
import { Video } from 'src/app/models/Video';
import { CommentsService } from 'src/app/services/comments/comments.service';
import { Comment } from 'src/app/models/Comment';

@Module({
  imports: [TypeOrmModule.forFeature([Video, Comment])],
  controllers: [VideosController],
  providers: [VideosService, CommentsService]
})
export class VideosModule { }
