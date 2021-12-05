const express = require("express");
const cors = require('cors');
var bodyParser = require('body-parser');

// App
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get("/getAllProducts", (req, res) => {
  res.status(200).send({data: "Hello Node.js"});
});

app.post("/addNewProduct", (req, res) => {
  res.status(200).send({data: req.body});
})

app.listen(3000);