const express = require('express');
const app = express();
require("dotenv").config();
const connectDB = require('./db/connect');
const cors = require("cors");
const bodyparse = require("body-parser");
const appRoute = require('./routes/index');
const port = process.env.PORT || 5000;

app.use(
    cors({
      origin: "*",
      credentials: true,
    })
  );

// app.use((req,res,next) => {                                
//     req.header("Access-Control-Allow-Origin", "*");
//     req.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//     req.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
//     next();
//   });

app.use(express.json());

app.use("/api",appRoute);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log("error =>", error);
  }
};
start();