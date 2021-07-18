const express = require("express");
const { Cart } = require("../db/models");
const router = express.Router();

router.post("/", (req, res) => {
  Cart.create(req.body)
    .then((cart) => res.status(200).json(cart))
    .catch((err) => {
      res.send("cart already exists!");
    });
});

module.exports = router;
