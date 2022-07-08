// 这里可以省略index.js，因为package.json中定义了main的数据是index.js
const tool = require('./my-tools-yn')
let date = tool.dateFormate(new Date())
console.log(date)
console.log('--------------------------')
let str = `<h1>这是标题123<span>这是里面的内容"&nbsp;</span></h1>`
const resStr = tool.htmlScape(str)
console.log(resStr)
console.log('--------------------------')
console.log(tool.htmlUnscape(resStr))
