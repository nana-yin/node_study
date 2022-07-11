const express = require('express');
const app = express();
// 引入路由模块
const router = require('../module/userRoute');

app.listen(80, (req,res) => {
  console.log('express server is running at http://127.0.0.1')
})

// 使用路由模块
// app.use(router)
// 使用 添加同一个路由前缀的路由模块
app.use('/api',router)


