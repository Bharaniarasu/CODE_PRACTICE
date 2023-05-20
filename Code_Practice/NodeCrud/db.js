const mongoDb = require("mongodb");
const mongoClient = mongoDb.MongoClient;
const ObjectId = mongoDb.ObjectId;
let database;
const getDatabase = async () => {
  //mongoClient.connect returns a promise so we add await to wait untill the operation to complete.
  const client = await mongoClient.connect("mongodb://127.0.0.1:27017");
  database = client.db("UserDatabase");
  if (!database) {
    console.log("Database COnnection Error !");
  }
  return database;
};
module.exports = { getDatabase, ObjectId };
