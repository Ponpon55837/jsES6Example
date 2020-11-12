const randomKeyValue = () => {
  // 先隨機產生一個數值，轉成長度為36的字串，擷取其中第2到第10的值，並加上當天的日期轉成長度為36的字串並取第2到第10的值
  return Math.random().toString(36).substr(2,10) + Date.now().toString(36).substr(4,10)
}

const root = document.querySelector('#root').innerHTML = randomKeyValue()
