// 根据不同的url影响不同的html内容
const http = require('http');
const server = http.createServer();

server.on('request', (req,res) => {
  // 1.获取服务器中的url
  const url = req.url;
  // 2.默认设置页面为404
  let content = '<h1>404 Not Found！</h1>'
  // 3.判断页面的路径是 / 或者 /index.html，跳转到首页
  if (url === '/' || url === '/index.html') {
    content = '<h1>首页</h1>'
  } else if (url === '/about.html') {
    // 4.判断页面的路径是 /about.html，跳转到关于页面
    content = '<h1>关于页面</h1>'
  }
  // 5.设置Content-type，防止中文乱码
  res.setHeader('Content-type', 'text/html; charset=utf-8');
  res.end(content)
})

server.listen(80, () => {
  console.log('server is running at http://127.0.0.1')
})