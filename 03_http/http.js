// 创建一个基本的web服务器

// 1、引入http模块
const http = require('http');

// 2、创建web服务器实例
const server = http.createServer();

// 3、为服务器实例绑定 request 事件，监听客户端的请求
/**
 *  req是请求对象，它包含了与客户端相关的数据。例如：
 *    req.url 表示客户端请求的url（这个url是端口号之后的地址，不会包含端口号之前的ip地址！）
 *    req.method 表示客户端请求的类型
 * 
 *  res是响应对象，它包含了与服务器相关的数据。例如：
 *    res.end(str)：向客户端发送指定的内容，并且结束这次请求的处理过程
 */
server.on('request', function(req,res)  {
  console.log('绑定请求的事件成功',req.method)
  // 解决中文乱码的问题
  res.setHeader('Content-type', 'text/html;charset=utf-8')
  res.end('结束请求')
})

// 4、启动服务器
server.listen(80, function() {
  console.log('服务器127.0.0.1启动成功')
}) 