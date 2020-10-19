let showValue = document.querySelector('#root')
let showIMG = document.querySelector('#rootIMG')

//在呼叫時先將是否可見的打開，這樣才不會有不顯示的問題
document.querySelector('#cars').addEventListener('change', (event) => {
  showIMG.style.visibility = 'visible'
  checkInput(event)
})

const checkInput = (event) => {
  const srcArr = ["https://pad.chinatimes.com/action/ah/20200816/anoac15/img/03760_063041002.813.0816%20VOLVO.jpg",
    "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/media/107063/2008-saab-9-7x-aero-photo-109596-s-986x603.jpg",
    "https://www.autocar.co.uk/sites/autocar.co.uk/files/1-mercedes-gls-2020-rt-hero-front.jpg",
    "https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2020/07/21/1/8224265.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=1200"
  ]
  switch(event.target.value) {
    case 'volvo':
      return (
        showIMG.src = srcArr[0]
      )
    case 'saab':
      return (
        showIMG.src = srcArr[1]
      )
    case 'mercedes':
      return (
        showIMG.src = srcArr[2]
      )
    case 'audi':
      return (
        showIMG.src = srcArr[3]
      )
    default:
      return (
        showIMG.src = '',
        console.log(showIMG.src)
      )
  }
}

const clearFunc = () => {
  showIMG.style.visibility = 'hidden'
}
