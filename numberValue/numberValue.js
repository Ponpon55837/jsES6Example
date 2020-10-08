let num =3.1415926

// 以下處理結果會四舍五入:
document.querySelector('#show1').innerHTML = 'toFixed(4)：' + num.toFixed(4)
// 以下處理結果會取到小數點第二位:
document.querySelector('#show2').innerHTML = 'Math.floor(value * 100) / 100 ：' + Math.floor(num * 100) / 100
// 使用正規表示式來處理字串
document.querySelector('#show3').innerHTML = 'Number(num.toString().match(/^\d+(?:\.\d{0,3})?/))：' + Number(num.toString().match(/^\d+(?:\.\d{0,3})?/))
