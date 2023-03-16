/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { VideosService } from './videos.service';
// DTOS
import { CreateDTO } from './DTO/Create.dto';
import { UpdateDTO } from './DTO/Update.dto';

@Controller('videos')
export class VideosController {

    constructor(private vService: VideosService) { }

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
