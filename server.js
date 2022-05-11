const express = require("express");

var app = express();
const cors = require("cors");
var bodyParser = require("body-parser");
app.use(bodyParser.json());

// create application/json parser
app.use(express.urlencoded({ extended: false }));
app.use(cors());
const port = process.env.PORT || 4000;
const contactRoutes = require("./server/routes/contact.routes");

app.use("/contact", contactRoutes);

app.listen(port, () => {
  try {
    console.log(`Server is up on port ${port}!`);
  } catch (err) {
    console.log(err.message);
  }
});
