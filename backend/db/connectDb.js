import mongoose from "mongoose";

export const connectDb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDb Connected");
    }
    catch(error){
        console.log("Error in Connecting MongoDB", error);
    }
}