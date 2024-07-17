import asyncHandler from "express-async-handler"
import express, {Request , Response} from "express"
import ProductModel from "../model/product.model";
import { sampleProducts } from "../utilis/dummyproduct";

  const seedRouter = express.Router();


 seedRouter.get("/", asyncHandler(
    async (req:Request, res:Response) => {

        await ProductModel.deleteMany({})


        const products = await ProductModel.insertMany(sampleProducts)

        res.json(products)
    }
))



export default seedRouter ; 