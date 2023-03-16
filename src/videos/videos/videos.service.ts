/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
// ENTITIES CONFIG
import { Video } from 'src/typeorm/entities/Video';
import { CreateVideoParams } from 'src/utils/types';


@Injectable()
export class VideosService {

    constructor(
        @InjectRepository(Video) private vrepo: Repository<Video>
    ) { }

    // FETCH ALL VIDEOS
    fetchAllVideos() {
        return this.vrepo.find();
    }

    // FETCH ONE
    fetchOneVideo(id: number) {
        return this.vrepo.find({ where: { video_id: id } });
    }

    // CREATE ONE
    async createOneVideo(paylaod: CreateVideoParams) {
        const data = this.vrepo.create({
            ...paylaod,
            video_createdOn: new Date(),
            video_modifiedOn: new Date(),
            video_views: 0,
            video_link: '#'
        });

        const saved = await this.vrepo.save(data);

        return saved;
    }

    // DELETE ONE
    deleteOneVideo(id: number) {
        return this.vrepo.delete({ video_id: id })
    }
}
