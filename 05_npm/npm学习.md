#### 1、搜索包的地址：https://www.npmjs.com/
#### 2、下载包的服务器地址：https://registry.npmjs.org/
#### 3、安装最新版本的包：npm install 包的名称（例如：`npm install moment`）
#### 4、安装最新版本的包（简化版）：npm i 包的名称（例如：`npm i moment`）
#### 5、安装指定版本的包（简化版）：npm i 包的名称@版本号（例如：`npm i moment@2.24.0`）
#### 6、包的版本号：以点分十进制的形式，总共有三位数字：
    第1位数字：大版本
    第2位数字：功能版本
    第3位数字：Bug修复版本
  - 只要前面的版本号增长了，则后面的版本号归零。
#### 7、快速创建package.json：`npm init -y`
    只能在英文目录下成功执行，名称不能出现中文名和空格！
#### 8、dependencies节点（项目包-核心依赖包）：
    记录在项目中开发和上线之后都需要用到的包。
    安装：npm i
#### 9、一次性安装所有的包：`npm i`
#### 10、卸载包：`npm uninstall 包的名称`
#### 11、devDependencies节点（项目包-开发依赖包）：
    记录在项目中开发需要,上线后不需要用到的包。
    简写形式：npm i 包名 -D
    完整形式：npm i 包名 --save-dev
#### 12、解决下载包速度慢的问题：
- 淘宝npm镜像服务器：
    - 查看当前的下包镜像资源：npm config get registry
    - 将下包的镜像源切换为淘宝的镜像源：npm config set registry https://registry.npm.taobao.org
    - 检查镜像源是否下载成功：npm config get registry
- nrm：切换下包的镜像源
  - 安装nrm：npm i nrm -g
  - 查看所有的镜像源：nrm ls
  - 将下包的镜像源切换为taobao：nrm use taobao
#### 13、全局包：
- 安装全局包：npm i 包名 -g
- 卸载全局包：npm uninstall 包名 -g
- 只有工具性质的包，才有全局安装的必要性。
- 包是否需要全局安装，参考官方说明文档。
#### 14、i5ting_doc：
- 把md文档转为html页面的工具。
- 安装：npm i -g i5ting_doc
- 使用：i5ting_toc -f 要转换的md的文件路径 -o
#### 15、定义一个属于自己的包：
- 编写自己的包：
  - 新增一个文件夹，里面包含package.json、README.md、index.js文件。
  - 初始化package.json文件：
      ```
      {
          "name": "my-tools-yn",  // 包的名称不允许重复，在取名称的时候可以去官网进行检索
          "version": "1.0.0", // 初始化的版本号
          "description": "提供了格式化时间、HTMLEscape相关的功能", // 描述信息
          "main": "index.js", // 包的入口文件
          "keywords": [ // 检索的关键字
          "yn",
          "dateFormat",
          "escape"
          ],
          "license": "ISC" // 默认的开源协议
      }
      ```
  - 在index.js中定义自己的函数，如果函数过多，可以新增一个src文件，将函数放在src目录下的不同文件中。
  - 在README.md中写一下说明，主要包含安装包、导入包、如果使用包内部的方法、开源协议
- 发布包：
  - 将下包的服务器地址切换为 npm 的官方服务器地址，否则会导致失败。
  - 在终端执行 npm login，输入用户名、密码、邮箱之后，即可登录成功。
  - 切换到包的根目录
  - npm publish  就能发布成功了
- 删除已经发布的包：
  - npm unpublish 包名 --force
    - 只能删除72小时内的包
    - 被删除的包，24小时之内不允许重复发布
#### 16、第三方模块的加载机制：
- 如果传给require的模块标识符，不是一个内置模块，也没有以'./' 或 '../'开头，那么Node.js会从当前模块的父目录开始，尝试从/node_modules 文件夹中加载第三方模块。
- 如果没有找到第三方模块，则移动到再上一层父目录中，进行加载，知道文件系统的根目录。
  - 假如在'C:\Users\node\project\foo.js'文件里面调用了require('tools')，则查找的顺序：
    - C:\Users\node\project\node_modules\tools
    - C:\Users\node\node_modules\tools
    - C:\Users\node_modules\tools
    - C:\node_modules\tools
    - 报错
#### 17、目录作为模块：
- 当把目录作为模块标识符，传递给require()进行加载的时候，有三种加载方式：
  - 在被加载的目录下查找一个叫做package.json的文件，并寻找main属性，作为require的入口。
  - 如果目录里面没有package.json文件，或者main入口文件不在或无法解析，则Node.js将会试图加载目录下的idnex.js文件。
  - 如果以上两步都失败了，则会报错：Error:Cannot find module 'xxx'
