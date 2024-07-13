import express, { Request, Response} from "express";
import { sampleProducts } from "./utilis/dummyproduct";
import cors from "cors" ; 

const app = express()

const corsOption = {
 origin:"http://localhost:5173",
method:"POST , GET , PUT , PATCH , DELETE",
credentials:true
}

app.use(cors(corsOption))

app.get("/api/products", (req:Request, res:Response)=>{
    res.send(sampleProducts)

})

app.get("/api/product/:slug", (req:Request, res:Response)=>{
    const { slug} = req.params ; 

  const product =   sampleProducts.find((product)=>(product.slug === slug))
  res.json(product)

})

app.listen(4000, ()=>{
    console.log("server running successfully")
})