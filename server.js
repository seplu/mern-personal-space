import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";

const app = express();
dotenv.config();

import connectDB from "./db/connect.js";

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  res.send("Personal Space Welcome");
});

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
