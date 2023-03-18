/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from 'src/app/models/Comment';
import { Video } from 'src/app/models/Video';

@Injectable()
export class CommentsService {

    constructor(
        @InjectRepository(Comment) private commentRepo: Repository<Comment>,
        @InjectRepository(Video) private videRepo: Repository<Video>
    ) { }

    async createOneComment(videoID: number, payload: any) {
        const video = await this.videRepo.findOneBy({ video_id: videoID });

        if (!video)
            throw new HttpException(
                'User not found',
                HttpStatus.BAD_REQUEST
            )

        const data = this.commentRepo.create({
            ...payload,
            video: video
        });

        return await this.commentRepo.save(data);
    }

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
