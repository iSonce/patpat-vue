export default function ComputedTime(time) {
  console.log('time')
  let dateBegin = new Date(time.replace(/-/g, '/'))
  let dateEnd = new Date()
  let dateDiff = dateEnd.getTime() - dateBegin.getTime() //时间差的毫秒数
  let dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000)) //计算出相差天数
  if (dayDiff > 7) {
    return time.split(' ')[0]
  }
  if (dayDiff > 0) {
    return dayDiff + '天前'
  }
  let hourDiff = Math.floor(dateDiff / (3600 * 1000)) //计算出相差小时数
  if (hourDiff > 0) {
    return hourDiff + '小时前'
  }
  let minutesDiff = Math.floor(dateDiff / (60 * 1000)) //计算出相差分钟数
  if (minutesDiff > 0) {
    return minutesDiff + '分钟前'
  }
  let secondsDiff = Math.floor(dateDiff / 1000) //计算出相差秒数
  if (secondsDiff > 0) {
    return secondsDiff + '秒前'
  }
}
