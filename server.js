const express = require("express");
const cors = require('cors')
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
app.use(express.json());
const userRoute = require("./routes/userRoute");
const adminRoute = require("./routes/adminRoute");
const doctorRoute = require("./routes/doctorsRoute");
const path = require("path");
const cookieParser = require('cookie-parser');


// var corsoption = {
//   origin:["https://muhammedfayistgl.github.io","http://localhost:3000"], //origin from where you requesting // "http://localhost:3000",
// }
app.use(cookieParser());
app.set("trust proxy", 1)
app.use(cors({
  origin: ["http://localhost:3000","https://muhammedfayistgl.github.io"],
  credentials:true,
}));//{credentials:true}
// app.use(cors({
//   origin: true, credentials: true
// }))

app.use("/api/user", userRoute);
app.use("/api/admin", adminRoute);
app.use("/api/doctor", doctorRoute);

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Headers", "*");
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  next();
});

// if (process.env.NODE_ENV === "production") {
//   app.use("/", express.static("client/build"));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client/dist/index.html"));
//   });
// }


const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Node Express Server Started at ${port}!`));
