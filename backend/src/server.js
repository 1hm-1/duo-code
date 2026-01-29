import express from 'express';
import { ENV } from './lib/env.js';
// import dotenv from 'dotenv';

// dotenv.config();

//初始化/实例化express应用
const app = express();
console.log(ENV.PORT);
console.log(ENV.DB_URL);

//定义路由
app.get("/", (req, res) => {
    res.status(200).json({msg:"success from backend"});
    });
//启动服务器
app.listen(ENV.PORT, () => console.log('Server is running on port:', ENV.PORT));