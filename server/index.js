const express = require("express");
const getProducts = require("./getProducts");
const getProduct = require("./getProduct");
const app = express();

const port = 5000;

app.get("/api/products", getProducts);
// console.log('test')

app.get("/api/product/:id", getProduct);
// console.log(req, params)

app.listen(port, () => console.log(`server running on port${port}`));
