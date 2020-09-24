window.onload = () => {
  // 抓取ID
  let getPictureToChangeID = document.querySelector('#changeIDSRC')
  // 設定指向的初始值
  let count = 0
  // 圖片來源的array
  const pictureSRCArray = [
    'https://cdn-7.nikon-cdn.com/Images/Learn-Explore/Photography-Techniques/2019/CA-Chris-Ogonek-Picture-Controls/Media/Chris-Ogonek-Picture-Controls-Vivid.jpg',
    'https://s.yimg.com/uu/api/res/1.2/DdytqdFTgtQuxVrHLDdmjQ--~B/aD03MTY7dz0xMDgwO3NtPTE7YXBwaWQ9eXRhY2h5b24-/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2019-11/7b5b5330-112b-11ea-a77f-7c019be7ecae'
  ]
  // 圖片alt值的array
  const pictureAltArray = ['圖片來源1', '圖片來源2']
  // 建立一個function用來執行計數與設定時間
  const toggleWithTime = () => {
    getPictureToChangeID.src = pictureSRCArray[count]
    getPictureToChangeID.alt = pictureSRCArray[count]

    count = (count + 1) % pictureAltArray.length
  }
  setInterval(toggleWithTime, 2000)
}
