import express , { Request, Response} from "express";
import asyncHandler from "express-async-handler";
import ProductModel from "../model/product.model";

const productRouter = express.Router()


productRouter.get("/", asyncHandler(
    async (req:Request, res:Response) => {


        const products = await ProductModel.find()
        if (!products) res.status(404).json({ message: "Product not found" })

        res.json(products)
    }
))

productRouter.get("/slug/:slug", asyncHandler(
    async (req, res) => {


        const products = await ProductModel.findOne({ slug: req.params.slug })
        if (!products) res.status(404).json({ message: "Product not found" })

        res.json(products)
    }
))

export default productRouter ; 