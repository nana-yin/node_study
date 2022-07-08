## 安装
```
npm install my-tools-yn
```

## 导入
```
const tool = require('my-tools-yn')
```

## 格式化时间
```
// 调用 dateFormate 对时间进行格式化
let date = tool.dateFormate(new Date())
// 结果 2022-07-08 14:46:24
console.log(date)
```

## 转义 HTML 中的特殊字符
```
// 待转换的 HTML 字符串
let str = `<h1>这是标题123<span>这是里面的内容"&nbsp;</span></h1>`
// 调用 htmlScape 方法进行转换
const resStr = tool.htmlScape(str)
// 输出结果 &lt;h1&gt;这是标题123&lt;span&gt;这是里面的内容&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;
console.log(resStr)
```

## 还原为 HTML 字符
```
// 调用 htmlUnscape 方法进行转换
const unscapeStr = tool.htmlUnscape(resStr)
// 输出结果 <h1>这是标题123<span>这是里面的内容"&nbsp;</span></h1>
console.log(unscapeStr)
```

## 开源协议
ISC