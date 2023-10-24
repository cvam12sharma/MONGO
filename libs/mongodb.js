import mongoose from "mongoose";

const connectMangoDB= async()=>{
    try{
      await  mongoose.connect(process.env.MONGODB_URL);
        console.log("connect to mongodb")

    }catch(error){
        console.log(error);


    }
};

export default connectMangoDB;