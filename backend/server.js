import express from 'express';
import userRoutes from './routes/user.routes.js';
import exploreRoutes from './routes/explore.routes.js';
import dotenv from "dotenv";
import cors from "cors";

const app=express();
dotenv.config();

app.use(cors());

app.get("/",(req,res)=>{
    res.send("server is ready");
})

app.use("/api/users",userRoutes)
app.use("/api/explore",exploreRoutes)



app.listen(5000,()=>{
    console.log("server running on 5000");
})