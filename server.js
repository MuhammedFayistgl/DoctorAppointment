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
const  cookieParser = require('cookie-parser')

var corsoption={
  origin:"*", //origin from where you requesting // "http://localhost:3000",
  credentials:true
}

app.use(cors(corsoption))

app.use(cookieParser());
app.use("/api/user", userRoute);
app.use("/api/admin", adminRoute);
app.use("/api/doctor", doctorRoute);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
}
const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Node Express Server Started at ${port}!`));
