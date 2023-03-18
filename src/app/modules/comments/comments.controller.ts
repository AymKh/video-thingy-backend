/* eslint-disable prettier/prettier */
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CommentsService } from 'src/app/services/comments/comments.service';

@Controller('comments')
export class CommentsController {

    constructor(private commentService: CommentsService) { }

    // @Get()
    // getAllComments() {
    //     return this.commentService.getAllComment();
    // }
}