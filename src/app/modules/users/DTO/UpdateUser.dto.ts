/* eslint-disable prettier/prettier */

import { ApiProperty } from "@nestjs/swagger";

export class UpdateUsertDTO {

    @ApiProperty()
    username: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    passwordConfirmation: string;
}