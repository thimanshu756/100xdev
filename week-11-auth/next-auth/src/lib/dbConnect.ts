import mongoose from "mongoose";

let alreadyDone = false;

export async function ensureDbConnected(){
    console.log("inside db connect");
    
    if(alreadyDone){
        return;
    }
    alreadyDone = true;
    await mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true , useUnifiedTopology: true, dbName: "courses_test" })
    console.log("inside db connect");
}
