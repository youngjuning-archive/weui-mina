import moment from './moment'
/**
 * 日期的格式化计算
 */
const formatTime = (type = 1, date = 0) => {
  if (type === 0) { // 20180314192807
    if (date === 0) {
      return moment().format('YYYYMMDDHHmmss')
    } else {
      return moment(date).format('YYYYMMDDHHmmss')
    }
  } else if (type === 1) { // 2018/03/14 19:28:38
    if (date === 0) {
      return moment().format('YYYY/MM/DD HH:mm:ss')
    } else {
      return moment(date).format('YYYY/MM/DD HH:mm:ss')
    }
  } else if (type === 2) { // 2018/3/14
    if (date === 0) {
      return moment().format('YYYY/M/D')
    } else {
      return moment(date).format('YYYY/M/D')
    }
  } else if (type === 3) { // 19:28:38
    if (date === 0) {
      return moment().format('HH:mm:ss')
    } else {
      return moment(date).format('HH:mm:ss')
    }
  }
}

/**
 * 绘制自动换行的字符串
 * @param  {[object]} canvasContext  [canvas 绘图上下文]
 * @param  {[string]} text           [在画布上输出的文本]
 * @param  {[number]} x              [绘制文本的左上角x坐标位置]
 * @param  {[number]} y              [绘制文本的左上角y坐标位置]
 * @param  {[number]} maxWidth       [需要绘制的最大宽度]
 */
const fillText = (canvasContext,text,size,x,y,maxWidth) => {
  var chr = text.split('')
  var temp = ''
  var row = []
  for(var i = 0; i < chr.length; i++){
    if(canvasContext.measureText(temp).width >= maxWidth){
      row.push(temp)
      temp = ''
    }
    temp += chr[i]
  }
  row.push(temp)
  let iv = 0
  let index = 0
  if(row.length <= 2){iv = 3}else if(row.length <= 4){iv = 2}else if(row.length == 5){iv = 2}else if (row.length == 6) {iv = 1}
  for(var j = 0; j < row.length; j++){
    if (/\n/.test(row[j])) {
      let rowText = row[j].split('\n')
      rowText.forEach(item => {
        index ++
        canvasContext.fillText(item,x,y+(j+index+iv-1)*(size+4))
      })
    } else {
      canvasContext.fillText(row[j],x,y+(j+index+iv)*(size+4))
    }
  }
}

export default {
  formatTime,
  fillText
}

export {
  formatTime,
  fillText
}
