/**
 * express中间件：
 *   1、含义：本质上就是一个function处理函数
 *   2、格式：
 *      const express = require('express');
        const app = express();
        app.get('/', function(req,res,next) {
          // 中间件的形参列表中，必须包含 next() 参数，而路由处理器中只包含req和res
          next()
        })
        app.listen(80)
    3、next函数的作用：实现多个中间件的连续调用，将流转关系转交给下一个中间件或者路由。
    4、全局生效的中间件：
        - 含义：客户端发起任何请求，到达服务器后，都会触发的中间件
        - 代码：调用app.use(中间件函数)
        - 如果定义了多个全局生效的中间件，将会按照app.use()的顺序执行。
    5、中间件的作用：
      - 多个中间件之间，共享同一份req和res。我们可以在上游的中间件中，统一为req或res对象添加自定义的属性和方法，供下游的中间件或者路由进行使用。
 */
const express = require('express');
const app = express();

// 1、定义一个最简单的中间件函数
const mw = function(req,res,next) {
  console.log('定义一个最简单的中间件函数')
  // 把流转关系转交给下一个中间件或者路由
  next()
}

// 2、使用全局生效的中间件函数，要写在发送请求之前！
app.use(mw)

app.get('/', function(req,res) {
  console.log('调用了 / 路由处理函数')
  res.send('调用get请求了')
})
app.post('/user', function(req,res) {
  console.log('调用了 /user 路由处理函数')
  res.send('调用post请求了')
})
app.listen(80)