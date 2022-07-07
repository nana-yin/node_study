/**
 * path路径模块：
 *   path.join()方法：将多个路径片段拼接成一个完整的路径字符串
 *   path.basename()方法：用来从路径字符串中，将文件名解析出来
 *   path.extname()方法：可以获取路径中的扩展名部分
 */

// 导入path模块
const path = require('path')


/**
 * path.join()的语法格式：
 *    path.join[...paths]
 *        - ...paths<string>路径片段的序列
 *        - 返回值：<string>
 */
// const pathStr = path.join('/a', '/b/c', '../', './d', 'e')
// console.log(pathStr)  //   输出\a\b\d\e


/**
 * path.basename()的语法格式：
 *    path.basename(path[, ext]) 
 *        - path<string>：表示一个路径字符串，必选参数。
 *        - ext<string>：表示文件的扩展名，可选参数。
 *        - 返回值：<string> 表示路径中的最后一部分。
 */
// const fpath = '/a/b/c/hhaah.html';
// const fullname = path.basename(fpath)
// console.log(fullname)  // 输出hhaah.html
// const nameWithoutExt = path.basename(fpath, '.html')
// console.log(nameWithoutExt)  // 输出hhaah   即移除了文件名的扩展名


/**
 * path.extname()的语法格式：
 *    path.extname(path) 
 *        - path<string>：表示一个路径字符串，必选参数。
 *        - 返回值：<string> 表示扩展名的字符串。
 */
const fpath = '/a/b/c/hhaah.html';
const fext = path.extname(fpath)  // 输出.html
console.log(fext)  // 输出.html