/**
 * 时钟的案例：
 *    1、将exercise.html拆分成三个页面：index.css、index.js、index.html
 *    2、将拆分出的3个文件存放到clock目录中。
 */
// 导入模块
const fs = require('fs');
const path = require('path');

// 通过正则表达式来筛选出<style></style>标签中的内容
const regStyle = /<style>[\s\S]*<\/style>/
// 通过正则表达式来筛选出<script></script>标签中的内容
const regScript = /<script>[\s\S]*<\/script>/

// 读取exercise.html文件
fs.readFile(path.join(__dirname, 'exercise.html'), 'utf8', function(err, dataStr) {
    // 如果err存在，说明文件读取失败
    if (err) return console.log('exercise.html文件读取失败！'+ err.message)
    // 文件读取成功，将html文件进行分解

    // 将css内容提取出来
    resolveCss(dataStr)
})

// 提取css内容
function resolveCss(str) {
  // 将style的标签包括内容进行提取，得到的是一个数组
  const cssArr = regStyle.exec(str)
  // 去除style标签
  const cssStr = cssArr[0].replace('<style>', '').replace('</style>', '')
  // console.log('cssArr',cssStr)

  // 将数据放在clock目录下面的index.css文件中
  fs.writeFile(path.join(__dirname, './clock/index.css'), cssStr, function(err) {
    if(err) return console.log('写入css文件失败！'+err.message)
    console.log('写入文件成功！')
  })
}
