/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Param, ParseIntPipe, Put } from '@nestjs/common';
import { CommentsService } from 'src/app/services/comments/comments.service';
import { UpdateCommentDTO } from './DTO/updateComment.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('comments')
@ApiTags('Comments')
export class CommentsController {

    constructor(private commentService: CommentsService) { }

    @Delete(':id')
    deleteOneComment(@Param('id', ParseIntPipe) id: number) {
        return this.commentService.deleteOneComment(id);
    }

    @Put(':id')
    updateOneComment(
        @Param('id', ParseIntPipe) id: number,
        @Body() payload: UpdateCommentDTO
    ) {
        return this.commentService.updateOneComment(id, payload);
    }
}