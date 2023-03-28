/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/ban-types */
import { PassportSerializer } from "@nestjs/passport";
import { User } from "src/app/models/User";


export class SessionSerializer extends PassportSerializer {
    serializeUser(user: User, done: (err: Error, user: User) => void): any {
        done(null, user);
    }

    deserializeUser(payload: any, done: (err: Error, user: User) => void): any {
        done(null, payload);
    }
}