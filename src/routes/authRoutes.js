const express = require("express");
const router = express.Router();

const AuthController = require("../controllers/AuthController");
const controller = new AuthController();

router.post("/auth/register", (req, res) => controller.register(req, res));
router.post("/auth/login", (req, res) => controller.login(req, res));

module.exports = router;
