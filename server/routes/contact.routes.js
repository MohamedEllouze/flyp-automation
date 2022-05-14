const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact.model");
const puppeteer = require("puppeteer");

router.post("/", async (req, res, next) => {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://poshmark.com/signup");

    await page.type("#firstName", req.body.firstName);
    await page.type("#lastName", req.body.lastName);
    await page.type("#email", req.body.email);
    await page.type("#password", req.body.password);
    await page.type("[name='userName']", req.body.username);
    await page.click("[name='gender']");
    await page.click(".dropdown__menu li:nth-child(" + req.body.gender + ")");
    await page.click("[name='country']");
    await page.click(
      "[name='country'] .dropdown__menu li:nth-child(" + req.body.country + ")"
    );
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
