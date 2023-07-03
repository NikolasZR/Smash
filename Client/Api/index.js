const express = require("express");
const DB = require("./src/config/db");
const bodyParser = require("body-parser");

const app = express();
const port = 3001;
const productsRouter = require("./src/routes/products");

//routes

//for parsing application/json

app.use(
  bodyParser.json({
    limit: "50mb",
  })
);

//for parsing application/xwww-

app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
  })
);

app.use(productsRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

DB();
