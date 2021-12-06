const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
//Port 
const PORT = process.env.PORT || 3001

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Fitness", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useFindAndModify: false
});

//Routes
require("./routes/apiroute.js")(app);
require("./routes/viewroute.js")(app);

app.listen(PORT, () => {
  console.log(`App now running on port ${PORT}!`);
});
