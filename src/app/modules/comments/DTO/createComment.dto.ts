/* eslint-disable prettier/prettier */

import { ApiProperty } from "@nestjs/swagger";

export class CreateCommentDTO {

    @ApiProperty()
    comment_body: string;

    @ApiProperty()
    comment_up_votes: number;

    @ApiProperty()
    comment_down_votes: number;
}