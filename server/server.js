import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import fs from "fs";
dotenv.config();
// initializing the app
const app = express();

// middlewares
app.use(morgan("dev"))
app.use(express.json())
// connecting to MongoDB
const connectToDatabase = (connectionString, port) => {
  mongoose
    .connect(connectionString, {})
    .then(() => {
      app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
        console.log(`Connected to the database`);
      });
    })
    .catch((error) =>
      console.log(`Failed to connect to the database: ${error}`)
    );
};
connectToDatabase(process.env.MONGODB_URI, process.env.PORT)
