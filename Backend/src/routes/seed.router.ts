import asyncHandler from "express-async-handler"
import express, {Request , Response} from "express"
import ProductModel from "../model/product.model";
import { dummyUsers, sampleProducts } from "../utilis/dummyproduct";
import UserModel from "../model/user.model";

  const seedRouter = express.Router();


 seedRouter.get("/", asyncHandler(
    async (req:Request, res:Response) => {

        await ProductModel.deleteMany({})


        const products = await ProductModel.insertMany(sampleProducts)


        await UserModel.deleteMany({})

        const  createdUser  = await UserModel.insertMany(dummyUsers)

        res.json({products, createdUser })
    }
))



export default seedRouter ; 