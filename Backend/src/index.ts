import express, { Request, Response} from "express";
import { sampleProducts } from "./utilis/dummyproduct";
import cors from "cors" ; 
import dotenv from "dotenv"
import connectDb from "./mongodb/db";
import productRouter from "./routes/product.router";
import seedRouter from "./routes/seed.router";

const app = express()

dotenv.config()
connectDb()
const PORT = process.env.PORT || 4000 

const corsOption = {
 origin:"http://localhost:5173",
method:"POST , GET , PUT , PATCH , DELETE",
credentials:true
}

app.use(cors(corsOption))

app.use("/api/product",productRouter )
app.use("/api/seed", seedRouter)


app.listen(PORT, ()=>{
    console.log("server running successfully", PORT)
})