import { NextFunction,Request, Response } from "express";
import { usertype } from "../types/dbtypes";
import jwt,{ JwtPayload } from "jsonwebtoken";
import { ModifiedRequest, userPayload } from "../types/Request";

const generateToken = (user: usertype) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in the environment variables");
  }

  const token =  jwt.sign(
    {
      _id: user._id,
      email: user.email,
      name: user.name,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET  ,
    {
      expiresIn: "30d",
    }
  );
 return token;
};




export const isAuth = (req: Request, res: Response, next: NextFunction) => {
  if (req.cookies && req.cookies.token) {
    const { token } = req.cookies;
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined in the environment variables");
    }

    try {

      const decode = jwt.verify(
        token,
        process.env.JWT_SECRET 
      ) as userPayload;
      (req as ModifiedRequest).user = decode as {
        _id: string
        name: string
        email: string
        isAdmin: boolean
        token: string
      }
      next();
    } catch (error) {
      res.status(401).json({ message: 'Invalid Token' });
    }
  } else {
    res.status(401).json({ message: 'No Token' });
  }
};


export  {generateToken};
