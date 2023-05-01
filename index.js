const express = require("express");
const app = express();
var path = require("path");
const colors = require("colors");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
var cors = require("cors");
app.use(cors());
var bodyParser = require("body-parser");

//PARSER
app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ limit: "500mb", extended: true }));

//parser

//ROutes
const UserRouter = require("./routes/userRoute.route");
const connectDB = require("./config/db");
//ROutes

//connectdb
connectDB();
//connectdb

//middlewares
app.use("/api/user", UserRouter);
//middlewares
const server = app.listen(3000, () => {
  console.log(`server ${process.env.PORT} port дээр аслаа`.rainbow);
});
process.on("unhandledRejection", (err, promise) => {
  console.log(`алдаа гарлаа : ${err.message}`.red.underline.red.bold);
  server.close(() => {
    process.exit(1);
  });
});
