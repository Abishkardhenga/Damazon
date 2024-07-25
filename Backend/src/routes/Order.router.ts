import asyncHandler from "express-async-handler";
import express , { Request, Response} from "express";
import { isAuth } from "../utilis/token";
import OrderModel from "../model/order.model";
import { ModifiedRequest } from "../types/Request";


export const orderRouter = express.Router()
orderRouter.post("/", isAuth, asyncHandler(async(req:Request, res:Response)=>{
    if(req.body.orderItems?.length === 0){
        res.status(400).json({message:"Cart is empty"})
    }
    else{
        const createdOrder =  await OrderModel.create({
            orderItems: req.body.orderItems.map((x:any) => ({
                ...x,
                product: x._id,
              })),
              shippingAddress: req.body.shippingAddress,
              paymentMethod: req.body.paymentMethod,
              itemsPrice: req.body.itemsPrice,
              shippingPrice: req.body.shippingPrice,
              taxPrice: req.body.taxPrice,
              totalPrice: req.body.totalPrice,
              user: (req as ModifiedRequest).user._id,
            })
            res.status(201).json({ message: 'Order Created', order: createdOrder })
          }
        
    

}))


orderRouter.get("/:id", isAuth ,  asyncHandler(async(req:Request , res:Response)=>{
  const orderItem =   await OrderModel.findById(req.params.id)
  if(!orderItem){
    res.status(404).json({message:" Order not found "})
  }
  res.send(orderItem)

}) )