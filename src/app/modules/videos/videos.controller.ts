/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { VideosService } from '../../services/videos/videos.service';
import { CommentsService } from 'src/app/services/comments/comments.service';
// DTOS
import { CreateDTO } from './DTO/Create.dto';
import { UpdateDTO } from './DTO/Update.dto';

@Controller('videos')
export class VideosController {

    constructor(
        private vService: VideosService,
        private cService: CommentsService
    ) { }

    // GET ALL VIDEOS
    @Get('/')
    async getAllVideos() {
        const data = await this.vService.fetchAllVideos();
        return data;
    }

    // GET ONE VIDEO
    @Get(':id')
    async getOneVideo(@Param('id', ParseIntPipe) id: number) {
        const data = await this.vService.fetchOneVideo(id);
        return data;
    }

    // GET COMMENTS FOR VIDEO
    @Get(':id/comments')
    async getCommentsForVideo(@Param('id', ParseIntPipe) id: number) {
        const data = await this.cService.getAllComments(id);
        return data;
    }

    // CREATE ONE VIDEO
    @Post('/')
    createOneVideo(@Body() payload: CreateDTO) {
        return this.vService.createOneVideo(payload);
    }

    // UPDATE ONE VIDEO
    @Put(':id')
    async updateOneVideo(
        @Param('id', ParseIntPipe) id: number,
        @Body() payload: UpdateDTO
    ) {
        return this.vService.updateOneVideo(id, payload);
    }

    // DELETE ONE VIDEO
    @Delete(':id')
    async deleteOneVideo(@Param('id', ParseIntPipe) id: number) {
        return this.vService.deleteOneVideo(id);
    }

}
