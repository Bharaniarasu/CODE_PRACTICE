const express = require("express");
const app = express();
const multer = require("multer");
const path = require("path");
app.set("views", path.join(__dirname + "/views"));
app.set("view engine", "ejs");

let storage = multer.diskStorage({
  destination: (req, filename, callBack) => {
    callBack(null, "uploads");
  },
  filename: (req, file, callBack) => {
    callBack(
      null,
      file.originalname.replace(/\.[^/.]+$/, "") +
        "_" +
        Date.now() +
        path.extname(file.originalname)
    );
  },
});
let maxSize = 2 * 1000 * 1000;
let upload = multer({
  storage: storage,
  limits: { fileSize: maxSize },
  fileFilter: (req, file, callBack) => {
    let fileTypes = /jpg|jpeg|png/;
    let mimeType = fileTypes.test(file.mimetype);
    let extName = fileTypes.test(path.extname(file.originalname));

    if (mimeType && extName) {
      return callBack(null, true);
    }
    callBack("Error:File type Must be " + fileTypes);
  },
}).single("userFile");

app.get("/", (req, res) => {
  res.render("signUp");
});
app.post("/sign-up", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.send(err);
    } else {
      res.send("Successfully File Uploaded.....");
    }
  });
});
app.listen(3000, () => {
  console.log("Server runs at 3000 ...");
});
