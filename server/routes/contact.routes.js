const express = require("express");
const router = express.Router();
const url = require("url");
const Contact = require("../models/Contact.model");
const puppeteer = require("puppeteer");

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    contact = new Contact(req.body);
    await contact.save();

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://poshmark.com/signup");

    await page.type("#firstName", contact.firstName);
    await page.type("#lastName", contact.lastName);
    await page.type("#email", contact.email);
    await page.type("#password", contact.password);
    await page.type("[name='userName']", contact.username);
    await page.addStyleTag({ content: "#firstName{color: red}" });
    const element = await page.$(".m--t--1");
    let value = await page.evaluate((el) => el.textContent, element);
    console.log("element", value);
    res.json(contact);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
});

router.route("/profil").post(async (req, res, next) => {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    console.log(req.body.userLink);
    await page.goto(req.body.userLink);

    const name = await page.$(".ellipses");
    let nameValue = await page.evaluate((el) => el.textContent, name);

    const numberOfListings = await page.$(
      '[data-test="closet_listings_count"]'
    );
    let numberOfListingsValue = await page.evaluate(
      (el) => el.textContent,
      numberOfListings
    );
    const userImage = await page.$(".user-image");
    let ProfilePicValue = await page.evaluate((el) => el.src, userImage);
    res.json({
      name: nameValue,
      numberOfListings: numberOfListingsValue,
      ProfilePic: ProfilePicValue,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send();
  }
});
module.exports = router;
