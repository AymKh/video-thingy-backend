/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
// DTOS
import { CreateDTO } from './DTO/Create.dto';
import { UpdateDTO } from './DTO/Update.dto';

@Controller('videos')
export class VideosController {

    // GET ALL VIDEOS
    @Get('/')
    getAllVideos() {
        console.log('videos...');
        return [];
    }

    // GET ONE VIDEO
    @Get(':id')
    getOneVideo(@Param('id', ParseIntPipe) id: number) {
        console.log('video...');
        return id;
    }

    // CREATE ONE VIDEO
    @Post('/')
    createOneVideo(@Body() payload: CreateDTO) {
        return null;
    }

    // UPDATE ONE VIDEO
    @Put(':id')
    async updateOneVideo(
        @Param('id', ParseIntPipe) id: number,
        @Body() payload: UpdateDTO
    ) {
        return null;
    }

    // DELETE ONE VIDEO
    @Delete(':id')
    async deleteOneVideo(@Param('id', ParseIntPipe) id: number) {
        return null;
    }

}
