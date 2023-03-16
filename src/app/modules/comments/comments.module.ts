/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { CommentsService } from 'src/app/services/comments/comments.service';
import { Comment } from 'src/app/models/Comment';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Comment])],
  controllers: [CommentsController],
  providers: [CommentsService]
})
export class CommentsModule { }
