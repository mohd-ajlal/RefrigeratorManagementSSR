const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const refrigeratorsRoutes = require("./routes/refrigerators");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/refrigeratorDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));

app.use("/refrigerators", refrigeratorsRoutes);  

app.get("/", (req, res) => {
  res.redirect("/refrigerators");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
