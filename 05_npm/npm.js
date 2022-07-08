// 引入自定义的时间格式化模块
// const myFormate = require('./dateFormate');
// const date = new Date();  // 2022-07-08T01:41:34.981Z
// console.log(myFormate.dateFormate(date))

// 使用npm引入时间格式化插件moment
const moment = require('moment');
console.log(moment().format('YYYY-MM-DD hh:mm:ss'))