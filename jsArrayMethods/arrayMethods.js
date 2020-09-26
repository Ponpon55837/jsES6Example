const arr = ['Apple', 'Banana', 'Mango', 'Melo']
const show = document.querySelector('#show').innerHTML = "Nomal Array: " + arr
// 刪掉最後一個元素
const show1 = document.querySelector('#show1').innerHTML = "Pop Array: " + arr.pop()
// 從最後一個元素加入新元素
arr.push('pieapple')
const show2 = document.querySelector('#show2').innerHTML = "Pop Array: " + arr
// 從第一個元素開始刪除
arr.shift()
const show3 = document.querySelector('#show3').innerHTML = "Shift Array: " + arr
// 從第一個元素開始加入新元素
arr.unshift("Lemon")
const show4 = document.querySelector('#show4').innerHTML = "Unshift Array: " + arr
const show5 = document.querySelector("#show5").innerHTML = "Orign Array: " + arr
const spliceAddArray = () => {
  // 設定要從哪邊開始加入的位置
  arr.splice(2, 0,  "Kiwi")
  document.querySelector("#show5").innerHTML = "Splice Add Array: " + arr
}
const show6 = document.querySelector("#show6").innerHTML = "Orign Array: " + arr
const spliceRemoveArray = () => {
  // 設定要從哪邊開始刪除的位置
  arr.splice(0, 3,  "Kiwi")
  document.querySelector("#show6").innerHTML = "Splice Removed Array: " + arr
}
