const express = require("express");
const router = express.Router();
const url = require("url");
const Contact = require("../models/Contact.model");
router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    contact = new Contact(req.body);
    await contact.save();
    res.json(contact);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
});

router.route("/").get(async (req, res, next) => {
  try {
    const data = await Contact.find({});
    res.json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send();
  }
});
module.exports = router;
