/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
// ENTITIES
import { Video } from 'src/typeorm/entities/Video';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class VideosService {

    constructor(
        @InjectRepository(Video) private vrepo: Repository<Video>
    ) { }

    // FETCH ALL VIDEOS
    fetchAllVideos() {
        return this.vrepo.find();
    }
}
