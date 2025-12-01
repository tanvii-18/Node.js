import { MongoClient } from "mongodb";

const url = "mongodb://127.0.0.1:27017/";
const client = MongoClient(url);
const employess = "mydb";

export const connectDB = async () => {
  await client.connect();
  console.log("MongoDB connected");
  return client.db(employess);
};
