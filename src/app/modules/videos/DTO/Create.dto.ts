/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";

export class CreateDTO {
    @ApiProperty()
    title: string;

    @ApiProperty()
    video_genre: string;

    @ApiProperty()
    video_visibility: boolean;
}
