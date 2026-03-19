import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from 'express';
import connectDB from "./db/connectDB.js";
// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
import { app } from "./app.js";
dotenv.config();
/*
            THIS IS APPROACH ONE TO CONNECT DATABASE.
        **************************************************
const app=express();
(async() =>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error)=>{
            console.log("ERROR:", error);
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
            
        })

    } catch (error) {
        console.log("ERROR:", error);
        throw error
    }
})();
*/


/**
            THIS IS APPROACH TWO TO CONNECT DATABASE.
        ***************************************************
 */


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 4000,()=>{
        console.log(`Server is running at port: ${process.env.PORT}`);
        
    })
})
.catch((err)=>{
    console.log("MongoDB Connection failed!!", err);
    
})