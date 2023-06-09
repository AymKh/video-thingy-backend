/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { CommentsService } from 'src/app/services/comments/comments.service';
import { Comment } from 'src/app/models/Comment';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Video } from 'src/app/models/Video';

@Module({
  imports: [TypeOrmModule.forFeature([Comment, Video])],
  controllers: [CommentsController],
  providers: [CommentsService]
})
export class CommentsModule { }
