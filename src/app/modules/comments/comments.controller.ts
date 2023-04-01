/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Param, ParseIntPipe, Put, UseGuards } from '@nestjs/common';
import { CommentsService } from 'src/app/services/comments/comments.service';
import { UpdateCommentDTO } from './DTO/updateComment.dto';
import { ApiTags } from '@nestjs/swagger';
import { isAuthenticatedGuard } from 'src/app/guards/authenticated.guard';

@Controller('comments')
@ApiTags('Comments')
export class CommentsController {

    constructor(private commentService: CommentsService) { }

    @UseGuards(isAuthenticatedGuard)
    @Delete(':id')
    deleteOneComment(@Param('id', ParseIntPipe) id: number) {
        return this.commentService.deleteOneComment(id);
    }

    @UseGuards(isAuthenticatedGuard)
    @Put(':id')
    updateOneComment(
        @Param('id', ParseIntPipe) id: number,
        @Body() payload: UpdateCommentDTO
    ) {
        return this.commentService.updateOneComment(id, payload);
    }
}