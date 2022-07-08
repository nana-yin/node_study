const hs = require('./src/htmlescape');
const df = require('./src/dateFormate');

// 将需要的成员暴露出去
module.exports = {
  ...hs,
  ...df
}