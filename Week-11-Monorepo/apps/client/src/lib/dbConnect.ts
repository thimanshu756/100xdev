import mongoose from "mongoose";
let alreadyDone = false;

export async function ensureDbConnected() {
    if (alreadyDone) {
        console.log("phle hi kaam ho gya h");
        return;
    }
    alreadyDone = true;
    await mongoose.connect('mongodb://localhost:27017/coursera', { dbName: "courses" });
    console.log("db connected successfully");   
}