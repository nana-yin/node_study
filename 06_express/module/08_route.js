const express = require("express");
const router = express.Router();

// get 请求
router.get("/list", (req,res) => {
  const query =  req.query; // 通过req.query来获取客户端发送过来的查询字符串
  res.send({
    status: 0, // 状态，0 表示成功  1表示失败
    msg: "GET请求成功",
    data: query
  })
})

// post 请求
router.post("/detail", (req,res) => {
  const bd = req.body; // 通过req.body来获取请求体包含的 url-encoded 格式的数据
  res.send({
    status: 0, // 状态，0 表示成功  1表示失败
    msg: "POST请求成功",
    data: bd
  })
})

// delete 请求
router.delete("/delete", (req,res) => {
  res.send({
    status: 0, // 状态，0 表示成功  1表示失败
    msg: "Delete请求成功",
  })
})

module.exports = router