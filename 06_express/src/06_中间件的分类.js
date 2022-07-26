/**
 * 1、应用级别的中间件
 *   - 定义：通过app.use()、app.get()、app.post(),绑定到app实例上的中间件。
 * 2、路由级别的中间件
 *   - 定义：绑定到express.Router()上面的中间件叫做路由级别的中间件。
 *   - 应用级别的中间件是绑定到app实例上，路由级别的中间件是绑定到router实例上。
 * 3、错误级别的中间件
 *   - 作用：用来捕获整个项目中发生的异常错误，从而防止项目异常崩溃的问题。
 *   - 格式：错误级别中间件的function处理函数中，必须有4个形参，形参从前到后的顺序是，(err,req,res,next)
 *   - 注意：错误的中间件必须注册在所有的路由之后。
 * 4、express 内置的中间件
 *   - 从express@4.16.0开始，内置了3个中间件：
 *     - express.static 快速托管静态资源的内置中间件（无兼容性）
 *     - express.json 解析JSON格式的请求体数据（有兼容性，仅在4.16.0+版本可用）
 *     - express.urlencoded 解析URL-encoded格式的请求体数据（有兼容性，仅在4.16.0+版本可用）
 * 5、第三方的中间件
 *   - 在项目中按需下载并且配置的中间件
 */
const express  = require('express');
const app = express();

// 错误中间件的使用---------------------------------------------------------开始
// app.get('/',(req,res) => {
//   // 1.1 人为的制造错误
//   throw new Error('服务器内部错误')
// })

// // 1.2 定义一个错误中间件，用来捕获整个项目的异常错误，从而防止程序的崩溃
// app.use(function(err,req,res,next) {
//   console.log('捕获了一个错误')
//   res.send('Error：'+err.message)
// })
// 错误中间件的使用---------------------------------------------------------结束


// 内置中间件的使用---------------------------------------------------------开始
app.use(express.json())
app.post('/user', (req,res) => {
  // 在服务器里面，可以使用 req.body 来接受客户端发送过来的请求体的数据
  // 默认情况下，如果不配置解析表单数据的中间件，则 req.body 默认等于 undefined
  console.log('拿到的请求体的数据', req.body)
  res.send('获取user数据')
})

app.use(express.urlencoded({extended: false}))
// 关于extended值的解释：https://blog.csdn.net/io_123io_123/article/details/121742777
app.post('/book', (req,res) => {
  // 在服务器里面，可以使用 req.body 来获取 JSON 格式的表单数据和 url-encoded 格式的数据
  console.log('拿到的请求体的数据', req.body)
  res.send('获取book数据')
})
// 内置中间件的使用---------------------------------------------------------结束


// 第三方中间件的使用---------------------------------------------------------开始
// 举例：body-parser中间件  --->  解析请求体数据
// ① 安装：npm i body-parser
// ② 引入：const parser = require('body-parser')
// ① 使用：app.use(parser.urlencoded({extended: false}))
app.post('/list', (req,res) => {
  console.log(req.body)
  // 如果没有配置任何解析表单数据的中间件，则 req.body 默认等于 undefined
  res.send('ok')
})

// 第三方中间件的使用---------------------------------------------------------结束

app.listen(80)