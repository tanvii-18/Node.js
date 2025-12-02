import { MongoClient } from "mongodb";

const url = "mongodb://127.0.0.1:27017/"; //this url from mongoDB server to connect client
const client = new MongoClient(url); // client created
const employees = "employees"; // declares database name

// function to create database
export const connectDB = async () => {
  await client.connect(); // created client connection w database
  console.log("MongoDB connected");
  return client.db(employees); //returns databse
};

export const addEmployees = async () => {
  const db = await connectDB();
  const result = await db.collection("employees").insertOne({
    emp_id: 2,
    name: "Dhruvi Patel",
    role: "HR Manager",
    department: "HR",
    salary: 75000,
    email: "dhruviP@company.com",
  });
  return result;
};

export const readEmployees = async () => {
  const db = await connectDB();
  const result = await db.collection("employees").find().toArray();
  return result;
};

addEmployees();
