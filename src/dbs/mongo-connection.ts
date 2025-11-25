import { error } from "console";
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
const MONGOURL = process.env.MONGODB as string
let isConntected = false;

export const connectDB = async():Promise <void> =>{
 if (isConntected){
    console.log("mongodb is alreday connected")
    return
 }

 try{
    await mongoose.connect(MONGOURL)
    isConntected = true;
    console.log("Mongodb is connected successfully")
 }

 catch(err){
 console.error("Connection failed" , error)
 process.exit(1)
 }

}

