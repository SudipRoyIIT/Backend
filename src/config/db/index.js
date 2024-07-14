import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const { DB_USER, DB_PASS } = process.env;

// Ensure that the environment variable DB_URL is defined in your .env file
const url = `mongodb+srv://${DB_USER}:${DB_PASS}@codasr.0mfqyji.mongodb.net/?retryWrites=true&w=majority`;

const connect = async () => {
  try {
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Mongoose connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export { connect, url };
