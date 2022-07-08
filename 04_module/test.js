/**
 * 1、自定义模块必须指定以 ./ 或者 ../ 开头的路径标识符
 *   在加载自定义模块时，如果没有指定 ./ 或者 ../ ，node会把它当作内置模块或者第三方模块进行加载。
 * 2、在使用require导入自定义某块的时候，如果省略了文件中的扩展名，那么node.js将会按照下面的顺序分别尝试加载以下文件：
 *    - 按照确切的文件名进行加载
 *    - 补全 .js 扩展名进行加载
 *    - 补全 .json 扩展名进行加载
 *    - 补全 .node 扩展名进行加载
 *    - 加载失败，终端报错
 */

const m = require('./module');

console.log(m)