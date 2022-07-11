// 1、导入express
const express = require('express');
// 2、创建express服务器
const app = express();
// 3、启动服务器
app.listen(80, () => {
  console.log('express server is running at http://127.0.0.1')
});
// 4、监听客户端的 GET 和 POST 请求，并向客户端响应具体的内容
// app.get('/user', (req, res) => {
//   // 调用express中的res.send()方法，向客户端响应一个JSON对象
//   res.send({
//     name: '张三',
//     age: 20,
//     gender: '男'
//   })
// })

// app.post('/user', (req,res) => {
//   // 调用express中的res.send()方法，向客户端响应一个文本
//   res.send('post请求成功')
// })

// 5、获取url中携带的查询参数
// app.get('/',(req,res) => { // 静态参数
app.get('/user/:id',(req,res) => { // 动态参数
  /**
   *   - 静态参数：客户端使用?name=张三&age=20 这种查询字符串形式，发送到服务器的参数，使用req.query 对象进行访问。
   *     - req.query 默认是一个空对象
   *     - 取值：req.query.name    req.query.age
   *   - 动态参数：客户端使用 :参数名 的形式发送到服务器的参数，使用req.params 对象进行访问。
   *     - req.params 默认是一个空对象
   *     - 取值：req.params
   *     - 可以查询多个动态参数 app.get('/user/:id/:name',(req,res) => {})
  */
  // console.log(req)
  // res.send(req.query)
  res.send(req.params)
})

// 6、托管静态资源服务器
/**
 * public目录下，有css文件夹、js文件夹、images文件夹。下面的代码将托管public目录下的所有文件
 *  - app.use(express.static('public'))
 *  - 如果想要托管多个静态资源目录，则重复调用 app.use(express.static('files'))即可。
 *  - 如果public目录下面有index.html，files目录下也有index.html。当访问 http://localhost:8080/index.html 时候，顺序如下：
 *    - 先去public目录下面找index.html，找到了，则使用public下面的index.html。如没有找到，则去files目录下面找。
 *    - 即 按照代码的执行顺序进行资源的查找。
 */
/**
 * 访问public下面的所有文件,存储静态资源的目录名是不会出现在url中的。
 * http://localhost:3000/css/index.css
 * http://localhost:3000/js/index.js
 * http://localhost:3000/images/bg.jpg
 */
// app.use(express.static('../02_path/clock'))

// 7、挂载路径前缀
/**
 * 如果希望在托管的静态资源访问路径之前，挂载路径的前缀，则可以使用如下的方式：
 *    - app.use('/public', express.static('../02_path/clock'))
 *    - 访问public下面的所有文件：http://localhost:3000/public/css/index.css
 */
app.use('/abc',express.static('../../02_path/clock'))
