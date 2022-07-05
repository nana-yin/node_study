/**
 * 时钟的案例：
 *    1、将exercise.html拆分成三个页面：index.css、index.js、index.html
 *    2、将拆分出的3个文件存放到clock目录中。
 */
// 导入模块
const fs = require('fs');
const path = require('path');

// 正则学习：
// https://blog.csdn.net/u012206617/article/details/108597208

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

    // 提取script中的内容
    resolveScript(dataStr)

    // 重写html文件
    resolveHtml(dataStr)
    
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
    console.log('写入CSS文件成功！')
  })
}

// 提取script内容
function resolveScript(str) {
  // 将script的标签包括内容进行提取，得到的是一个数组
  const scriptArr = regScript.exec(str)
  // 去除style标签
  const scriptStr = scriptArr[0].replace('<script>', '').replace('</script>', '')
  // console.log('scriptArr',scriptArr)

  // 将数据放在clock目录下面的index.js文件中
  fs.writeFile(path.join(__dirname, './clock/index.js'), scriptStr, function(err) {
    if(err) return console.log('写入script文件失败！'+err.message)
    console.log('写入JS文件成功！')
  })
}

//将html文件重写
function resolveHtml(str) {
  /**
   * replace() 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串
        语法：stringObject.replace(regexp/substr,replacement)
        说明：regexp/substr（必须），规定子字符串或要替换的模式的RegExp对象。如果该值是一个字符串，则将它作为要检索的直接量文本模式，而不是首先被转换为RegExp对象。
              replacement（必须）： 替换文本或生成替换文本的函数
        返回值：一个用replacement替换了regexp的第一次匹配或所有匹配之后得到的新字符串。
   */
  const htmlStr = str.replace(regStyle, '<link rel="stylesheet" href="./index.css"/>').replace(regScript, '<script src="./index.js"></script>')

  // 将数据放在clock目录下面的index.html文件中
  fs.writeFile(path.join(__dirname, './clock/index.html'), htmlStr, function(err) {
    if(err) return console.log('写入html文件失败！'+err.message)
    console.log('写入HTML文件成功！')
  })
}
