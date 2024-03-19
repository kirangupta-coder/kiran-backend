import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB =async ()=>{
    try {
       const connectionIntance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB Connected !! DB HOST : ${connectionIntance.connection.host}`)
    } catch (error) {
        console.error(`Error : ${error}`)
        process.exit(1)
    }
}
export default connectDB;