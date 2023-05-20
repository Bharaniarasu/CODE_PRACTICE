const express = require("express");
const router = express.Router();
const path = require("path");
const pathDir = require("../utils/path");

router.get("/add-item", (req, res, next) => {
  res.render("add-product", { active: "add" });
});

router.post("/store", (req, res, next) => {
  console.log("Given Data : ", req.body);
  res.render("store", { product: { req }, active: true });
});

module.exports = router;
