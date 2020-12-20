const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const ObjectId = require("mongodb").ObjectId;
const MongoClient = require("mongodb").MongoClient;

require("dotenv").config();

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ugsfy.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const app = express();

app.use(bodyParser.json());
app.use(cors());

const port = 5000;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect((err) => {
  const collection = client.db("heroHunterDb").collection("seatBooking");

  console.log("db connect");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT || port);
