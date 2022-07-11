const express = require('express');
// 1、创建路由的实例对象
const router = express.Router();

// 2、编写具体的路由
router.get('/user/list', (req, res) => {
  res.send('get请求拿到了用户列表')
})

router.post('/user/add', (req, res) => {
  res.send('post请求添加用户')
})

// 3、导出路由
module.exports = router