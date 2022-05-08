const mongoose = require("mongoose");

const db_config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.flypDB = mongoose.createConnection(
  "mongodb+srv://everest-db:everest-db@everest-db-5ixk7.mongodb.net/flyp-automation?retryWrites=true&w=majority",
  db_config,
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB!!!");
  }
);

module.exports = mongoose;
