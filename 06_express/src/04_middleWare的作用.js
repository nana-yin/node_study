const express = require('express');
const app = express();

app.use((req,res,next) => {
  // 将中间件或者路由函数 共同需要的数据定义在这里
  const time = Date.now()
  req.startTime = time
  next()
})

app.get('/', function(req,res) {
  res.send('调用get请求了---'+ req.startTime)
})
app.post('/user', function(req,res) {
  res.send('调用post请求了'+ req.startTime)
})
app.listen(80)