/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateUsertDTO } from './DTO/CreateUser.dto';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from 'src/app/services/users/users.service';
import { UpdateUsertDTO } from './DTO/UpdateUser.dto';

@Controller('users')
@ApiTags('Users')
export class UsersController {

    constructor(
        private userService: UsersService
    ) { }

    @Get()
    getAllUsers() {
        return this.userService.getAllUsers();
    }

    @Get(':id')
    getOneUser(@Param('id', ParseIntPipe) id: number) {
        return this.userService.getOneUser(id);
    }

    @Post()
    createOneUser(@Body() payload: CreateUsertDTO) {
        return this.userService.createOneUser(payload);
    }

    @Put(':id')
    updateOneUser(
        @Param('id', ParseIntPipe) id: number,
        @Body() payload: UpdateUsertDTO
    ) {
        return this.userService.updateOneUser(id, payload);
    }

    @Delete(':id')
    deleteOneUser(@Param('id', ParseIntPipe) id: number) {
        return this.deleteOneUser(id);
    }
}
