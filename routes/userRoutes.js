const express = require("express");
const {
  loginController,
  registerController,
} = require("./../controllers/userController");

const router = express.Router();

//routes
//Login
router.post("/login", loginController);

//Register
router.post("/register", registerController);

module.exports = router;