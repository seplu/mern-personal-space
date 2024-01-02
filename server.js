import dotenv from "dotenv";
import express from "express";
import "express-async-errors";
import morgan from "morgan";

const app = express();
dotenv.config();

// DB
import connectDB from "./db/connect.js";
// Routes
import carRoutes from "./routes/carRoutes.js";
// Middleware
import errorHandlerMiddleware from "./middleware/error-handler.js";

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use(express.json());

// Routes Usage
app.get("/", (req, res) => {
  res.send("Personal Space Welcome");
});
app.use("/api/v1/car", carRoutes);

// Middleware Usage
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5100;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start().then(() => console.log("Server is started"));
