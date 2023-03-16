/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from 'src/typeorm/entities/Comment';

@Injectable()
export class CommentsService {

    constructor(@InjectRepository(Comment) private commentRepo: Repository<Comment>) { }

    getAllComment() {
        return this.commentRepo.find();
    }

    getOneComment(id: number) {
        return this.commentRepo.find({ where: { comment_id: id } });
    }

}
