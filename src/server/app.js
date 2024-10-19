const express = require("express");
// import middlewares from "./middlewares";

const cors = require("cors");

const port = 8000;

const app = express();
// 引入中央路由檔案 (index.js)
const routes = require("./routes");

// middlewares({app});

// 用於提供靜態文件，如 HTML、CSS、JavaScript、圖像等。
app.use(express.static("public"));
// 用於解析 application/json 格式的請求體，讓 Express 能夠處理 JSON 數據。
app.use(express.json());
app.use(cors()); // 啟用 CORS 設定
// 使用收集的路由
app.use("/", routes);

// 根路由
app.get("/", (req, res) => {
    res.send("Hello World!ss");
});

// 假資料 (可以用於測試)
const data = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
];

// API 路由
app.get("/api/items", (req, res) => {
    res.json(data); // 返回 JSON 資料
});

app.listen(port, (err) => {
    console.log(`Listening on http://localhost:${port}`);
});
