/* eslint-disable prettier/prettier */
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {

    constructor(private commentService: CommentsService) { }

    @Get()
    getAllComment() {
        return this.commentService.getAllComment();
    }

    @Get(':id')
    getOneComment(@Param(':id', ParseIntPipe) id: number) {
        return this.commentService.getOneComment(id);
    }
}