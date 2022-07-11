#### 1、Express官网：https://www.expressjs.com.cn/
#### 2、安装express：
- `npm i express@4.17.1`
#### 3、插件nodemon：
- 作用：监听项目中文件的变动，当代码被修改之后，会自动帮我们重启项目，方便开发和调试。
- 安装：`npm i nodemon -g`
- 使用（原来启动项目使用`node 文件名`，现在使用nodemon）：`nodemon 文件名`
### 4、express中的路由：
- 含义：客户端的请求 和 服务器处理函数 之间的 映射关系。
- 组成：请求的类型、请求的url地址、处理函数，格式如下：
  - app.METHOD(PATH, HANDLER) 
- 路由匹配的规则：
  - 按照定义的先后顺序进行匹配。
  - 请求类型和请求的URL同时匹配成功，才会调用相应的处理函数。
- 模块化路由：
  - 为了方便路由的模块化管理，express不建议将路由直接挂载到app上，而是推荐将路由抽离为单独的模块。
  - 抽离为单独模块的步骤：
    - ① 创建路由模块对应的js文件。
    - ② 调用express.router()函数创建路由对象
    - ③ 向路由对象上挂载具体的路由
    - ④ 使用module.exports向外共享路由对象
    - ⑤ 使用app.use()函数注册路由模块
  - app.use()函数的作用：用来注册全局的中间件。
  - 为路由模块添加前缀：
    - app.use('/api', router)