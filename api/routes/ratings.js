const express = require("express");
const { Rating } = require("../db/models");
const { Op } = require("sequelize");
const checkJWT = require("../middlewares/jwt");
const router = express.Router();

router.post("/", checkJWT, (req, res) => {
  const { userId, bookId } = req.body;
  Rating.findOrCreate({
    where: { [Op.and]: [{ userId }, { bookId }] },
    defaults: req.body,
  }).then((rating) => {
    rating[1]
      ? res.status(200).send(Number(rating[0]).toFixed(1))
      : res.status(400).send("Book already rated");
  });
});

module.exports = router;
