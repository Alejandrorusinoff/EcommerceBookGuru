const User = require("./user");
const Cart = require("./order");
const Book = require("./book");
const Order = require("./order");
const Rating = require("./rating");

User.hasMany(Order);
Order.belongsTo(User);

Book.hasMany(Order);
Order.belongsTo(Book);

Book.hasMany(Rating);
Rating.belongsTo(Book);

User.hasMany(Rating);
Rating.belongsTo(User);

module.exports = { User, Cart, Book, Order, Rating };
