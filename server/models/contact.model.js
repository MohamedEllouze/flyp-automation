const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const conn = require("../config/db");

const contactSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  username: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  gender: {
    type: String,
  },
  country: {
    type: String,
  },
  password: {
    type: String,
  },
});

module.exports = conn.flypDB.model("contact", contactSchema);
