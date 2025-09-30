import mongoose from "mongoose";
import { DB_NAME } from "@/lib/constrint";


const MONGODB_URI = `${process.env.MONGODB_URI}/${DB_NAME}`!;


if (!MONGODB_URI) {
  throw new Error("Please define mongo_uri in env variables");
}



let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}


export async function connectToDatabase() {
  
  if (cached.conn) {
    console.log("Using existing database connection");
    return cached.conn;
  }

  if (!cached.promise) {
    // Correctly assign the promise of the connection to cached.promise
    cached.promise = mongoose
      .connect(MONGODB_URI)
      .then(() => mongoose.connection);
  }

  try {
    // Wait for the promise to resolve
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null; // Reset promise on failure
    throw error;
  }

  return cached.conn;
}
