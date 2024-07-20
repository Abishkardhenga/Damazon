import { ObjectId } from "mongodb";

export type  usertype = { 

    name:string 
    email:string 
    _id: string | ObjectId;

    isAdmin:boolean

}