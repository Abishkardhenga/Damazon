import { usertype } from "../types/dbtypes";
import jwt from "jsonwebtoken";

const generateToken = (user: usertype): string => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in the environment variables");
  }

  return jwt.sign(
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
};

export default generateToken;
