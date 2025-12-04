const express = require("express");
const router = express.Router();
const { signup, login,verify,logout } = require("../Controllers/AuthController");

router.post("/signup", signup);
router.post("/login", login);
router.get("/verify", verify);
router.get("/logout", logout);
module.exports = router;
