import express from "express";
import path from "path";
import { ENV } from "./lib/env.js";
// import dotenv from 'dotenv';

// dotenv.config();

//初始化/实例化express应用
const app = express();

const __dirname = path.resolve();

console.log(ENV.PORT);
console.log(ENV.DB_URL);

//定义路由
app.get("/health", (req, res) => {
  res.status(200).json({ msg: "api is up and running" });
});

app.get("/books", (req, res) => {
  res.status(200).json({ msg: "this is the books page" });
});

// nake app ready for deployment
if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  // 处理所有其他路由，返回前端的index.html
  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

//启动服务器
app.listen(ENV.PORT, () => console.log("Server is running on port:", ENV.PORT));
