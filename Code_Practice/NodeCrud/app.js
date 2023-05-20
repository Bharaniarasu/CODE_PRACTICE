const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const dbo = require("./db");
const ObjectId = dbo.ObjectId;

app.engine(
  "hbs",
  exphbs.engine({ layoutsDir: "/views", defaultLayout: false })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "hbs");

app.get("/", async (req, res) => {
  const database = await dbo.getDatabase();
  const collection = database.collection("loginData");
  const cursor = collection.find({});
  const userData = await cursor.toArray();
  let message = "";
  let update_id, update_data;
  if (req.query.update_id) {
    update_id = req.query.update_id;
    update_data = await collection.findOne({ _id: new ObjectId(update_id) });
  }
  if (req.query.delete_id) {
    collection.deleteOne({ _id: new ObjectId(req.query.delete_id) });
    return res.redirect("/?status=3");
  }

  switch (req.query.status) {
    case "1":
      message = "Data Added successfully";
      break;
    case "2":
      message = "Data Updated successfully";
      break;
    case "3":
      message = "Data Deleted successfully";
      break;
    default:
      message = "Welcome to Crud Operation";
  }
  res.render("home", { message, data: userData, update_id, update_data });
});

app.post("/submit-data", async (req, res) => {
  const database = await dbo.getDatabase();
  const collection = database.collection("loginData");
  console.log(req.body);
  let userData = { user: req.body.userName, password: req.body.password };
  await collection.insertOne(userData);
  return res.redirect("/?status=1");
});

app.post("/submit-data/:update_id", async (req, res) => {
  const update_id = req.params.update_id;
  // console.log(update_id);
  const database = await dbo.getDatabase();
  const collection = database.collection("loginData");
  console.log(req.body);
  let updatedData = { user: req.body.userName, password: req.body.password };
  await collection.updateOne(
    { _id: new ObjectId(update_id) },
    { $set: updatedData }
  );
  return res.redirect("/?status=2");
});

app.listen(3000, () => {
  console.log("Server starts at Port : 3000 .............");
});
