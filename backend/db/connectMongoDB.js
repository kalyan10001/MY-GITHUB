import mongoose from "mongoose";

export default async function connectMongoDB(){
    try{

        await mongoose.connect(process.env.MONGO_URL);
        console.log("mongo db connected");
    }catch(error){
        console.log("error in connecting to mongo db");
    }
}