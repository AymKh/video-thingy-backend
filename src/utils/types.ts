/* eslint-disable prettier/prettier */
export class CreateVideoParams {
    title: string;
    video_genre: string;
    video_visibility: boolean;
}

export class UpdateVideoParams {
    title: string;
    video_genre: string;
    video_visibility: boolean;
}

export class UpdateCommentParams {
    comment_body: string;
    comment_up_votes: number;
    comment_down_votes: number;
}

export class CreateCommentParams {
    comment_body: string;
    comment_up_votes: number;
    comment_down_votes: number;
}

export class CreateUsertParams {
    username: string;
    password: string;
    passwordConfirmation: string;
}