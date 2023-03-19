/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { VideosService } from '../../services/videos/videos.service';
import { CommentsService } from 'src/app/services/comments/comments.service';
import { ApiTags } from '@nestjs/swagger';
// DTOS
import { CreateDTO } from './DTO/Create.dto';
import { UpdateDTO } from './DTO/Update.dto';
import { CreateCommentDTO } from '../comments/DTO/createComment.dto';

@Controller('videos')
export class VideosController {

    constructor(
        private vService: VideosService,
        private cService: CommentsService
    ) { }

    // GET ALL VIDEOS
    @ApiTags('Videos')
    @Get('/')
    async getAllVideos() {
        const data = await this.vService.fetchAllVideos();
        return data;
    }

    // GET ONE VIDEO
    @ApiTags('Videos')
    @Get(':id')
    async getOneVideo(@Param('id', ParseIntPipe) id: number) {
        const data = await this.vService.fetchOneVideo(id);
        return data;
    }

    // GET COMMENTS FOR VIDEO
    @ApiTags('Comments')
    @Get(':id/comments')
    async getCommentsForVideo(@Param('id', ParseIntPipe) id: number) {
        const data = await this.cService.getAllComments(id);
        return data;
    }

    // CREATE ONE VIDEO
    @ApiTags('Videos')
    @Post('/')
    createOneVideo(@Body() payload: CreateDTO) {
        return this.vService.createOneVideo(payload);
    }

    // CREATE ONE COMMENT
    @ApiTags('Comments')
    @Post(':id/comments')
    createOneComment(
        @Body() payload: CreateCommentDTO,
        @Param('id', ParseIntPipe) id: number
    ) {
        return this.cService.createOneComment(id, payload);
    }

    // UPDATE ONE VIDEO
    @ApiTags('Videos')
    @Put(':id')
    async updateOneVideo(
        @Param('id', ParseIntPipe) id: number,
        @Body() payload: UpdateDTO
    ) {
        return this.vService.updateOneVideo(id, payload);
    }

    // DELETE ONE VIDEO
    @ApiTags('Videos')
    @Delete(':id')
    async deleteOneVideo(@Param('id', ParseIntPipe) id: number) {
        return this.vService.deleteOneVideo(id);
    }

}
