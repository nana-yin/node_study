/**
 * 练习题：
 *    给定一个成绩.txt文件（小红=99 小白=100 小黄=70 小黑=66 小绿=88），将其内容改为如下形式：
 *      小红：99
 *      小白：100
 *      小黄：70
 *      小黑：66
 *      小绿：88
 */
const fs = require('fs')
fs.readFile('./成绩.txt', 'utf-8',function(err, dataStr){
  if (err) {
    return console.log('读取文件失败！'+ err.message)
  }
  const arr = dataStr.split(' ')
  const newArr = []
  arr.forEach(item => {
    newArr.push(item.replace('=','：'))
  })
  const resStr = newArr.join('\r\n')

  fs.writeFile('./成绩整理之后的结果.txt', resStr, 'utf-8', function(res) {
    if(res) {
      return console.log('成绩文本格式修改失败！'+ res.message)
    }
    console.log('成绩文本格式修改成功！')
  })
})
