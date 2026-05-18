import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/routes.js";

dotenv.config()

const app = express()

app.use(cors({origin:'http://localhost:5173'}))
app.use(express.json())

app.use('/api/users/', userRoutes)

connectDB()

app.listen(process.env.PORT, ()=>{
  console.log('Hola')
})