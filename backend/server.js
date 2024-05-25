import express from 'express';
import "./passport/github.auth.js"
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';
import passport from 'passport';
import exploreRoutes from './routes/explore.routes.js';
import dotenv from "dotenv";
import cors from "cors";
import connectMongoDB from './db/connectMongoDB.js';
import session from 'express-session';


const app=express();

app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());



dotenv.config();

app.use(cors());

app.get("/",(req,res)=>{
    res.send("server is ready");
})


app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/explore",exploreRoutes);



app.listen(5000,()=>{
    console.log("server running on 5000");
    connectMongoDB();
})