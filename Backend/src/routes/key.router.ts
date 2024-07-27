import expres from "express"
import { isAuth } from "../utilis/token"
import expressAsyncHandler from "express-async-handler"


export const keyRouter = expres.Router()
keyRouter.get("/paypal",isAuth, expressAsyncHandler((req, res )=>{
res.json({clientId:process.env.PAYPAL_CLIENT_ID})

}))