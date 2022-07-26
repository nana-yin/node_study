const express  = require("express");
const app = express();
// 解决跨域：npm i cors
const cors = require("cors");
// 配置cors
app.use(cors())

/**
 * cors响应头：
 *    1、Access-Control-Allow-Origin：
 *        语法格式：Access-Control-Allow-Origin: <origin> | *
 *          origin：指定允许访问该资源的外域url。
 *          * ：任何域的请求。
 *    2、Access-Control-Allow-Headers：
 *       默认情况下，cors仅支持客户端向服务器发送如下9个请求头：
 *        Accept
 *        Accept-Language
 *        Content-Language
 *        DPR
 *        DownLink
 *        Save-Data
 *        Viewport-Width
 *        width
 *        Content-Type（只有三个值：application/x-www-form-urlencoded、multipart/form-data、text/plain）
 *     如果要设置额外的请求头，则需要使用 Access-Control-Allow-Headers 进行声明。
 *     例如：允许客户端额外向服务器发送 Content-Type 请求头和 X-Custom-Header 请求头。
 *         // 注意：多个请求头之间用逗号进行分隔。
 *         res.setHeader('Access-Control-Allow-Header', "Content-type, X-Custom-Header") 
 *     3、Access-Control-Allow-Methods：
 *        默认情况下，cors仅支持客户端发起 GET、POST、HEAD请求。
 *        如果客户端希望通过PUT、DELETE 等方式请求服务器的资源，则需要使用 Access-Control-Allow-Methods。
 *      例1：只允许 POST、GET、DELETE、HEAD 请求方法
 *         res.setHeader('Access-Control-Allow-Methods', 'POST、GET、DELETE、HEAD')
 *      例2：允许所有的 HTTP 请求方法
 *         res.setHeader('Access-Control-Allow-Methods', '*')
 *     4、简单请求（条件要同时满足）：
 *        ① 请求方式：GET、POST、HEAD 三者之一
 *        ② Http头部信息没有自定义的头部字段（即只有9个默认的请求头）
 *     5、预检请求（只满足其中的一个条件即可）：
 *        ① 请求方式：GET、POST、HEAD 之外的请求方法类型
 *        ② 请求头中包含自定义头部字段
 *        ③ 向服务器中发送了 application/json 格式的数据
 */


// 引用解析url-encoded的中间件
app.use(express.urlencoded({extended: false}))

// 导入路由模块
const router = require("../module/08_route.js");
// 把路由模块注册到app上
app.use("/api", router)

app.listen(80, () => {
  console.log("express server running at http://127.0.0.1")
})