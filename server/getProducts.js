const products = require("../products.json");

const getProducts = (req, res) => {
  if (req.query.price) {
    const items = products.filter(
      elem => elem.price >= parseFloat(req.query.price)
    );
    res.status(200).send(items);
  } else res.status(200).send(products);
};

module.exports = getProducts;
