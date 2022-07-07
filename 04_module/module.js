/**
 * 1、模块里面的数据具有模块作用域，外部无法访问。
 * 2、每一个js文件都有自己的module对象
 * 3、用require引入一个自定义模块，就是引入该自定义模块中 module.exports 指向的那个对象模块。
 * 4、在一个自定义模块中，默认情况下，module.exports = {}
 * 5、exports和module.exports指向同一个对象，最终结果以module.exports为主。
 */

// console.log(module)

// 案例1：
// module.exports.name = '张三';
// module.exports.sayHello = function () {
//   console.log('你好')
// }
// exports.age = 18;
// module.exports = {
//   name: '李四',
//   sayHi: function () {
//     console.log('Hi~')
//   }
// }
// 结论：导出的对象以最终的module.exports指向的对象为准，即只有name和sayHi两个属性。


// 案例2：
// module.exports.age = 18;
// exports = {
//   name: '王五',
//   age: 20
// }
// 结论：{ age: 18 }


// 案例3：
// module.exports.age = 18;
// exports.name = '赵六'
// 结论：{ age: 18, name: '赵六' }


// 案例4：
exports = {
  name: '李磊',
  age: 10
}
module.exports = exports
module.exports.gender = '男';
// 结论：{ name: '李磊', age: 10, gender: '男' }

