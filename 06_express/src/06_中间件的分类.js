/**
 * 1、应用级别的中间件
 *   - 定义：通过app.use()、app.get()、app.post(),绑定到app实例上的中间件。
 * 2、路由级别的中间件
 *   - 定义：绑定到express.Router()上面的中间件叫做路由级别的中间件。
 *   - 应用级别的中间件是绑定到app实例上，路由级别的中间件是绑定到router实例上。
 * 3、错误级别的中间件
 *   - 作用：用来捕获整个项目中发生的异常错误，从而防止项目异常崩溃的问题。
 *   - 格式：错误级别中间件的function处理函数中，必须有4个形参，形参从前到后的顺序是，(err,req,res,next)
 *   - 错误的中间件必须注册在所有的路由之后。
 */
const express  = require('express');
const app = express();
app.get('/',(req,res) => {
  // 1.1 人为的制造错误
  throw new Error('服务器内部错误')
})

// 1.2 定义一个错误中间件，用来捕获整个项目的异常错误，从而防止程序的崩溃
app.use(function(err,req,res,next) {
  console.log('捕获了一个错误')
  res.send('Error：'+err.message)
})

app.listen(80)


// 4、express 内置的中间件
// 5、第三方的中间件