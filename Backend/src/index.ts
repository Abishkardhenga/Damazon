import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './mongodb/db';
import productRouter from './routes/product.router';
import seedRouter from './routes/seed.router';
import UserRouter from './routes/user.router';
import cookieParser from 'cookie-parser';

dotenv.config();
connectDb();

const app = express();
const PORT = process.env.PORT || 4000;

const corsOption = {
  origin: "http://localhost:5173",
  methods: "POST, GET, PUT, PATCH, DELETE",
  credentials: true
};

app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.JWT_SECRET)); // Use with a secret if you are using signed cookies

app.use("/api/product", productRouter);
app.use("/api/user", UserRouter);
app.use("/api/seed", seedRouter);

app.listen(PORT, () => {
  console.log("Server running successfully on port", PORT);
});
