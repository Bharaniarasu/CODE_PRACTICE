const express = require("express");
const bodyParser = require("body-parser");
const adminRouter = require("./routes/adminRoute");
const homeRouter = require("./routes/home");
const path = require("path");
const { engine } = require("express-handlebars");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

//setting Templating engine

// app.set("view engine", "pug");
// app.set("view engine", "ejs");

// app.set("view engine", "handlebars");    // we cant use this long word it as an extention

//set the templating engine to Handle bars.
// We can give some values like extension name and default layout names.if no layouts we can set to false
app.engine("hbs", engine({ extname: ".hbs", defaultLayout: "main.hbs" }));
// now we can set engine
app.set("view engine", "hbs");

app.use("/admin", adminRouter);
app.use(homeRouter);
app.use((req, res, next) => {
  res.status(404).render("404");
});
app.listen(3000);
