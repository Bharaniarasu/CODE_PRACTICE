const express = require("express");
const router = express.Router();
const path = require("path");
router.get("/", (req, res) => {
  const list = ["Tomatto", "Potatto", "Beans", "Rice", "Wheet"];
  res.render("shop", {
    active: "about",
    list,
    listExist: list.length > 0,
  });
});
module.exports = router;
