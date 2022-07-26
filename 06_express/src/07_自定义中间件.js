/**
 * 自己手动模拟一个类似于 express.urlencoded 的中间件，来解析POST提交到服务器的表单数据
 */
const express = require("express");
const app = express();
// 1、引入中间件
const bodyParser = require("../module/bodyparser");
// 2、定义为全局可用的中间件
app.use(bodyParser)

app.post('/', (req,res) => {
  res.send('ok')
})

app.listen(80, () => {
  console.log('server running at http://127.0.0.1')
})