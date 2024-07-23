import express, { Request , Response} from "express";
import asyncHandler from "express-async-handler";
import UserModel from "../model/user.model";
import bycrypt from "bcryptjs"
import {generateToken} from "../utilis/token";

export  const UserRouter = express.Router( ) ; 




UserRouter.post('/signin', asyncHandler(async (req: Request, res: Response) => {
  const user = await UserModel.findOne({ email: req.body.email });
  
  if (user && bycrypt.compareSync(req.body.password, user.password)) {
    const token = generateToken(user);

    res.cookie('token', token, {
        httpOnly: false,
        maxAge: 24 * 60 * 60 * 1000,
        sameSite: "none", 
    
    });


    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: token, 
    });

  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
}));



UserRouter.post("/signup", asyncHandler(async(req:Request, res:Response)=>{
    const newUser = await UserModel.create({
        name: req.body.name,
        email: req.body.email,
        password: bycrypt.hashSync(req.body.password),
    } )

    if(!newUser){
        res.status(403).json({ message:"Something is error"})
    }

    res.cookie("token", newUser, {
        httpOnly: false,
        maxAge: 24 * 60 * 60 * 1000,
        sameSite:"none"
      }).json({ 
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        isAdmin: newUser.isAdmin,
        token: generateToken(newUser),
    })

}))

export default UserRouter;
