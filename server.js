const app = require("./app");
const mongoose = require("mongoose");
const morgan = require("morgan");

require("dotenv").config();

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

const port = process.env.PORT || 5100;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(port, () => console.log(`Server is listening on port ${port}`));
  })
  .catch((error) => {
    console.log(error);
  });
