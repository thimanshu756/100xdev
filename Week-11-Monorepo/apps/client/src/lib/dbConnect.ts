
import mongoose from 'mongoose';

const connection = {
    isConnected: false
};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  let db = await mongoose.connect('mongodb://localhost:27017/coursera', { dbName: "courses" });
  connection.isConnected = true;
}

export default dbConnect;