const express = require("express");
const app = express();
var path = require("path");
const colors = require("colors");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
var cors = require("cors");
app.use(cors());
const connectDb = require("./config/db");
const errorHandler = require("./middleware/errorHandler");
// const errorHandler = require("./middleware/errorHandler");
var bodyParser = require("body-parser");

//PARSER
app.use(express.json({ limit: "500mb" }));
app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ limit: "500mb", extended: true }));
//Parse

//db connect
connectDb();
//db connect

//Routes
const ProductRoute = require("./routes/product.routes");
const UserRoute = require("./routes/user.routes");
//Routes
//middleware
app.use("/api/product", ProductRoute);
app.use("/api/user", UserRoute);
//middleware

app.get("/", async (req, res, next) => {
  res
    .status(200)
    .send({ port: process.env.PORT, mongodb: process.env.MONGODB_URI });
});
//errorHandler
app.use(errorHandler);
//errorHandler
const server = app.listen(3000, () => {
  console.log(`server ${process.env.PORT} port дээр аслаа`);
});
process.on("unhandledRejection", (err, promise) => {
  console.log(`алдаа гарлаа : ${err.message}`.red.underline.red.bold);
  server.close(() => {
    process.exit(1);
  });
});
