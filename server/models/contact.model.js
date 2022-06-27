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
  toEat: {
    type: String,
  },
  toDrink: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = conn.flypDB.model("contact", contactSchema);
