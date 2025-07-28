import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {}; // You can pass options like useNewUrlParser, useUnifiedTopology if needed

if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so the MongoClient is preserved across module reloads
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, it's best to not use a global variable
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
