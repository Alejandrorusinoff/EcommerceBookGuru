const express = require("express");
const router = express.Router();
const checkJWT = require("../middlewares/jwt");
const userController = require("../controllers/userController");

//Creamos un usuario
router.post("/register", userController.user_register);

//Logueamos un usuario
router.post("/login", userController.user_login);

//Se devuelven todas la ordenes que con bought: false
router.get("/:userId/cart", checkJWT, userController.user_getCart);

//Devuelve un usuario por id
router.get("/user/:userId", checkJWT, userController.user_getUserByPk);

//Se checkean las ordenes en false a true
router.get("/:userId/checked", checkJWT, userController.user_checkoutOrder);

//Devuelve todos los users
router.get("/all/:userId", checkJWT, userController.user_getAllUsers);

//Borramos un usuario
router.delete("/", checkJWT, userController.user_delete);

//Actualizamos la propiedad admin de un usuario
//router.put("/profile/:id", checkJWT, userController.user_changeAdminProperty)

//sólo cambia el campo isAdmin
router.put("/toggleAdmin", checkJWT, userController.user_toggleAdminStatus);

module.exports = router;
