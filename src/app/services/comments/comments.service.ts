/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from 'src/app/models/Comment';

@Injectable()
export class CommentsService {

    constructor(@InjectRepository(Comment) private commentRepo: Repository<Comment>) { }

    getAllComments(videoID: number) {
        return this.commentRepo.find({
            where: {
                video: videoID
            }
        });
    }

    deleteOneComment(id: number) {
        return this.commentRepo.delete({ comment_id: id })
    }

    updateOneComment(id: number, payload: any) {
        return this.commentRepo.update(
            { comment_id: id },
            { ...payload }
        )
    }

}
