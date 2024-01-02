import dotenv from "dotenv";
import express from "express";
import "express-async-errors";
import morgan from "morgan";

const app = express();
dotenv.config();

// Middleware
import errorHandlerMiddleware from "./middleware/error-handler.js";

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  res.send("Personal Space Welcome");
});
// Middleware Usage
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5100;

const start = async () => {
  try {
    app.listen(port, () => console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start().then(() => console.log("Server is started"));
