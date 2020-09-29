const emailRule = "^[a-zA-Z0-9]+[a-z@.]*$"
const passwordRule = "^[a-zA-Z0-9!@#$%^&*()_+]*$"

document.querySelector('#email').addEventListener('input', (mailEvent) => {
  if (mailEvent.target.value.match(emailRule)){
    console.log(mailEvent.target.value)
    document.querySelector("#values").innerHTML = ''
    document.querySelector('#submitButton').style.display = ''
  }else if(mailEvent.target.value.length == 0){
    document.querySelector("#values").innerHTML = '欄位不得為空'
    document.querySelector('#submitButton').style.display = 'none'
  }
  else {
    document.querySelector("#values").innerHTML = '僅能輸入英文、數字、@ 及 . '
    document.querySelector('#submitButton').style.display = 'none'
  }
})

document.querySelector('#password').addEventListener('input', (passwordEvent) => {
  if (passwordEvent.target.value.match(passwordRule)){
    console.log(passwordEvent.target.value)
    document.querySelector("#values").innerHTML = ''
    document.querySelector('#submitButton').style.display = ''
  }else if(passwordEvent.target.value.length == 0){
    document.querySelector("#values").innerHTML = '欄位不得為空'
    document.querySelector('#submitButton').style.display = 'none'
  }
  else {
    document.querySelector("#values").innerHTML = '僅能輸入英文、數字與部分符號 '
    document.querySelector('#submitButton').style.display = 'none'
  }
})


const checkEmptyInput = () => {
  let inputMailValue = document.querySelector('#email').value
  let inputPWValue = document.querySelector('#password').value
  if(inputMailValue.length >= 8 && inputPWValue.length >= 8){
    console.log('Can submit')
  }else if(inputMailValue.length < 8){
    document.querySelector("#values").innerHTML = 'Email長度不得小於8'
    document.querySelector('#submitButton').style.display = 'none'
  }else if (inputPWValue.length < 8){
    document.querySelector("#values").innerHTML = '密碼長度不得小於8'
    document.querySelector('#submitButton').style.display = 'none'
  }
}
