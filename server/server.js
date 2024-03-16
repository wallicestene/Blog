import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import blogsRoutes from "./routes/blogsRoutes.js";
import userRoutes from "./routes/usersRoutes.js";
dotenv.config();
// initializing the app
const app = express();

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use("/uploads", express.static("./controllers/uploads") )
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
connectToDatabase(process.env.MONGODB_URI, process.env.PORT);
// all Routes
app.use(blogsRoutes);
app.use(userRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found!" });
});
