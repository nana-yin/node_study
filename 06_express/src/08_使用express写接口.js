const express  = require("express");
const app = express();
// 解决跨域：npm i cors
const cors = require("cors");
// 配置中间件
app.use(cors())
// 引用解析url-encoded的中间件
app.use(express.urlencoded({extended: false}))

// 导入路由模块
const router = require("../module/08_route.js");
// 把路由模块注册到app上
app.use("/api", router)

app.listen(80, () => {
  console.log("express server running at http://127.0.0.1")
})