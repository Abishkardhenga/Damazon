import express, { Request , Response} from "express";
import asyncHandler from "express-async-handler";
import UserModel from "../model/user.model";
import bycrypt from "bcryptjs"
import generateToken from "../utilis/token";

export  const UserRouter = express.Router( ) ; 


UserRouter.post("/signin", asyncHandler(async(req:Request, res:Response)=>{


    const user =  await UserModel.findOne({email:req.body.email})
    if(user){
if(bycrypt.compareSync(req.body.password , user.password)){
    res.json({
_id:user.id,
name:user.name , 
email:user.email,
isAdmin:user.isAdmin,
token:generateToken(user)


    })
    return ;
}
    }
res.status(401).json({message:"Invalid email or password "})
}))