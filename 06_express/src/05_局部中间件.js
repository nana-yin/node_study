const express  = require('express');
const app = express();

const mw = function(req,res,next){
  console.log('调用了第1个局部中间件')
  next()
}

const mw2 = function(req,res,next){
  console.log('调用了第2个局部中间件')
  next()
}

app.get('/',(req,res) => {
  console.log('没有调用任何中间件')
  res.send('get路由函数，没有调用任何中间件')
})

app.get('/user',mw,(req,res) => {
  res.send('/user')
})

app.post('/',[mw,mw2],(req,res) => {
// app.post('/',mw,mw2,(req,res) => {
  res.send('调用了多个中间件')
})

app.listen(80)
