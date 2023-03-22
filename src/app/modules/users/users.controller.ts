/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateUsertDTO } from './DTO/CreateUser.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('Users')
export class UsersController {

    @Get()
    getAllUsers() {
        return [];
    }

    @Get(':id')
    getOneUser(@Param('id', ParseIntPipe) id: number) {
        return null;
    }

    @Post()
    createOneUser(@Body() payload: CreateUsertDTO) {
        return null;
    }

    @Put(':id')
    updateOneUser(@Param('id', ParseIntPipe) id: number) {
        return null;
    }

    @Delete(':id')
    deleteOneUser(@Param('id', ParseIntPipe) id: number) {
        return null;
    }
}
