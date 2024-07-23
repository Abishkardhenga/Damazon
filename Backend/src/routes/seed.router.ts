import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import express from 'express';
import { ModifiedRequest } from '../types/Request';
import { dummyUsers, sampleProducts } from '../utilis/dummyproduct';
import ProductModel from '../model/product.model';
import UserModel from '../model/user.model';
import { isAuth } from '../utilis/token';

const seedRouter = express.Router();

seedRouter.get("/", isAuth, asyncHandler(
    async (req:Request, res: Response) => {
        

        await ProductModel.deleteMany({});
        const products = await ProductModel.insertMany(sampleProducts);
        console.log("sanchai cau");

        await UserModel.deleteMany({});
        const createdUser = await UserModel.insertMany(dummyUsers);

        res.json({ products, createdUser });
    }
));


export { seedRouter };
