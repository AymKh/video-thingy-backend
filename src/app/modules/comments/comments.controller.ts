/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CommentsService } from 'src/app/services/comments/comments.service';

@Controller('comments')
export class CommentsController {

    constructor(private commentService: CommentsService) { }

    @Delete(':id')
    deleteOneComment(@Param('id', ParseIntPipe) id: number) {
        return this.commentService.deleteOneComment(id);
    }
}