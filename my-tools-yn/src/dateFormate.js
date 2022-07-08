// 时间格式化函数
function dateFormate(dateStr) {
  const str = new Date(dateStr)

  const y = str.getFullYear();
  const m = padZero(str.getMonth() + 1);
  const d = padZero(str.getDate());

  const hh  = padZero(str.getHours());
  const mm = padZero(str.getMinutes());
  const ss = padZero(str.getSeconds());

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

// 补零函数
function padZero(str) {
  let res = '0' + str
  if (Number(str) && Number(str) > 9) {
    res = str
  }
  return res
}

module.exports = {
  dateFormate
}