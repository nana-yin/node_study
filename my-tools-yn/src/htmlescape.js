// 定义一个将 html 字符进行转义的函数
function htmlScape(str) {
  return str.replace(/<|>|"|&/g, match => {
    switch(match) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "&":
        return "&amp;";
    }
  })
}

// 定义一个将转义字符转化为 HTML 的函数
function htmlUnscape(str) {
  return str.replace(/&lt;|&gt;|&quot;|&amp;/g, match => {
    switch(match) {
      case "&lt;":
        return "<";
      case "&gt;":
        return ">";
      case "&quot;":
        return '"';
      case "&amp;":
        return "&";
    }
  })
}

module.exports = {
  htmlScape,
  htmlUnscape
}