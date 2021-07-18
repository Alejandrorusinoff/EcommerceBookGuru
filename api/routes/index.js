const express = require("express");
const router = express.Router();
const users = require("./users");
const books = require("./books");
const cart = require("./cart");
const orders = require("./orders");
const ratings = require("./ratings");
const User = require("../db/models/user");

router.use("/users", users);
router.use("/books", books);
router.use("/cart", cart);
router.use("/ratings", ratings);
router.use("/orders", orders);

module.exports = router;
