const emailRule = "^[a-zA-Z0-9]+[a-z@.]*$"
const passwordRule = "^[a-zA-Z0-9!@#$%^&*()_+]*$"
const valusConent = document.querySelector("#values")
const submitButtonContent = document.querySelector('#submitButton')

document.querySelector('#email').addEventListener('input', (mailEvent) => {
  if (mailEvent.target.value.match(emailRule)){
    console.log(mailEvent.target.value)
    valusConent.innerHTML = ''
    submitButtonContent.style.display = ''
  }else if(mailEvent.target.value.length == 0){
    valusConent.innerHTML = '欄位不得為空'
    submitButtonContent.style.display = 'none'
  }
  else {
    valusConent.innerHTML = '僅能輸入英文、數字、@ 及 . '
    dsubmitButtonContent.style.display = 'none'
  }
})

document.querySelector('#password').addEventListener('input', (passwordEvent) => {
  if (passwordEvent.target.value.match(passwordRule)){
    console.log(passwordEvent.target.value)
    valusConent.innerHTML = ''
    submitButtonContent.style.display = ''
  }else if(passwordEvent.target.value.length == 0){
    valusConent.innerHTML = '欄位不得為空'
    submitButtonContent.style.display = 'none'
  }
  else {
    valusConent.innerHTML = '僅能輸入英文、數字與部分符號 '
    submitButtonContent.style.display = 'none'
  }
})


const checkEmptyInput = () => {
  let inputMailValue = document.querySelector('#email').value
  let inputPWValue = document.querySelector('#password').value
  if(inputMailValue.length >= 8 && inputPWValue.length >= 8){
    console.log('Can submit')
  }else if(inputMailValue.length < 8){
    valusConent.innerHTML = 'Email長度不得小於8'
    submitButtonContent.style.display = 'none'
  }else if (inputPWValue.length < 8){
    valusConent.innerHTML = '密碼長度不得小於8'
    submitButtonContent.style.display = 'none'
  }
}
