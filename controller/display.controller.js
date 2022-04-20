/** @format */

const ShortUrls = require("../models/shorturl.model");

const display = async (req, res) => {
  const urls = await ShortUrls.find();
  res.render("index.ejs", { urls: urls });
};

const shortUrl = async (req, res) => {
  const url = req.body.fullurl;
  if (url) {
    const updated = await ShortUrls.create({ full: req.body.fullurl });
  } else {
    return res.status(401).send({ msg: "Enter Url" });
  }
  res.redirect("/");
};

const click = async (req, res) => {
  const result = await ShortUrls.findOne({ short: req.params.urlid });
  if (result == null) {
    res.sendStatus(404);
  }
  result.clicks++;
  result.save();
  res.redirect(result.full);
};

module.exports = { display, shortUrl, click };
