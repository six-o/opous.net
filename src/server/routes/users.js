const express = require("express");
const router = express.Router();

// GET /users
router.get("/", (req, res) => {
    res.send("用戶列表");
});

// POST /users
router.get("/test", (req, res) => {
    res.send("創建一個用戶");
});

router.get("/test/Message", (req, res) => {
    res.json({ message: "Message" });
});

module.exports = router;
