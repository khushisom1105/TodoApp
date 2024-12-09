const express = require("express");
const authRoutes = require("./userAuth");
const router = express.Router();

router.use("/auth", authRoutes);    

module.exports = router;           