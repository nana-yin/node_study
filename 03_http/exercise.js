// 实现clock时钟的 web 服务器
// 将文件的目录作为请求的路径
const path = require('path');
const fs = require('fs');
const http = require('http');
const server = http.createServer();
let fpath = ''
let resText = '404 Not Found！'

server.on('request', (req,res) => {
  const url = req.url;
  if (url === '/') {
    fpath = path.join(__dirname, './clock/index.html');
  } else {
    fpath = path.join(__dirname, './clock',url);
  }
  // 将数据文件读出来
  fs.readFile(fpath, 'utf-8', (err, dataStr) => {
    if(!err) resText = dataStr
    res.end(resText)
  })
})

server.listen(80, () => {
  console.log('server running at http://127.0.0.1')
})