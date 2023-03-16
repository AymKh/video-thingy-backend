/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class UpdateDTO {
    @ApiProperty()
    title: string;

    @ApiProperty()
    video_genre: string;

    @ApiProperty()
    video_visibility: boolean;

    @ApiProperty()
    video_modifiedOn: Date;
}
