// 导入内置的模块
const qs = require("querystring");

let str = ""; // 0、定义str字符串，用来存储客户端发过来的请求体数据
// 1、定义一个中间件
const bodyParser = function(req,res,next) {
  // 2、监听 req.data 事件，获取服务器端发送过来的数据。
  //    如果数据量比较大，会将数据进行切割进行分批发送，这时候data事件就会多次触发。
  req.on('data', (chunk) => {
    str += chunk;
  })

  // 3、监听 req.end 事件，当请求体的数据接收完毕之后，会自动触发这个事件
  req.on('end', () => {
    // 4、将请求体数据从字符串格式转为对象格式。
    // Node.js内置了一个querystring 模块，用来解析请求体的数据，通过parse函数，可以将字符串转为对象格式。
    const bd = qs.parse(str)
    req.body = bd;
    next()
    console.log('完整的请求体数据', bd)
  })
}

module.exports = bodyParser