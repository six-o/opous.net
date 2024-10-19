const express = require("express");
const router = express.Router();

// GET /products
router.get("/", (req, res) => {
    res.send("產品列表");
});

// POST /products
router.get("/test", (req, res) => {
    res.send("創建一個產品");
});

module.exports = router;
