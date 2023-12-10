const express = require("express");
var bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const connectDb = require("./config/db");
connectDb();

let app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use("/", require("./routes/blog"));

app.listen(PORT, () => {
  console.log(`Server running at on port ${PORT}`);
});
