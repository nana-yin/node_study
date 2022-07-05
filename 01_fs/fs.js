// 导入fs模块
const fs = require('fs');

/**
 * 读取指定文件的内容
 *    语法：fs.readFile(path[,options], callback)    带[]表示是可选参数。
 *            - path：字符串，文件的路径，必选参数。
 *            - options：以什么编码格式来读取文件，可选参数。
 *            - callback：文件读取完成之后，通过回调函数拿到读取的结果，必选参数。
 */
// fs.readFile('./testRead.txt', 'utf-8', function(err, dataStr) {
//   // 如果读取成功，err 的值为 null
//   // 如果读取失败，err 的值为 错误对象，dataStr 的值为undefined

//   // 文件读取失败的结果
//   console.log('err',err)
//   // 文件读取成功的结果
//   console.log('dataStr',dataStr)
// })


/**
 * 向指定的文件中写入内容
 *    语法：fs.writeFile(file,data[,options],callback)
 *            - file：文件路径的字符串，必选参数。
 *            - data：文件写入的内容，必选参数。
 *            - options：以什么编码格式来写入文件，默认utf-8，可选参数。
 *            - callback：文件写入完成之后，通过回调函数拿到写入的结果，必选参数。
 *         fs.writeFile只会创建文件，不会创建目录。
 */
// fs.writeFile('testWrite.txt', '测试是否写入进去', function(err) {
//   // 如果写入成功，err 的值为 null
//   // 如果写入失败（如果文件名称不对，会创建一个文件。文件地址不对才会写入失败），err 的值为 错误对象
//   console.log(err)
// })


/**
 * 路径动态拼接的问题：
 *    主要是使用  ./  ../  的时候会发生文件找不到的错误。
 *    原因：
 *        代码运行的时候，会以 执行的node命令所在的目录 进行拼接。
 *    解决：
 *        1、使用绝对路径（完整的路径）  -->  移植性差，不利于维护。
 *        2、使用__dirname  表示当前文件所处的目录
 */
fs.readFile(__dirname+'/testRead.txt', 'utf-8', function(err, dataStr) {
  // 如果读取成功，err 的值为 null
  // 如果读取失败，err 的值为 错误对象，dataStr 的值为undefined

  // 文件读取失败的结果
  console.log('err',err)
  // 文件读取成功的结果
  console.log('dataStr',dataStr)
})