/* eslint-disable prettier/prettier */

import { ApiProperty } from "@nestjs/swagger";

export class CreateUsertDTO {

    @ApiProperty()
    username: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    passwordConfirmation: string;
}