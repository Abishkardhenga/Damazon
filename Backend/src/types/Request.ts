import { Request } from "express";

export interface ModifiedRequest extends Request {
    user:userPayload
}


export type userPayload = {
    _id: string;
    email: string;
    name: string;
    isAdmin: boolean;
    token: string;

}
