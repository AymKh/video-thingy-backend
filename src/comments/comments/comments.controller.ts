/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {

    constructor(private commentSerice: CommentsService) { }

    @Get()
    getAllComment() {
        return this.commentSerice.getAllComment();
    }
}
