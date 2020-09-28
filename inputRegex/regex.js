const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')
// console.log(emailInput.value.length)

const emailRule = "^[a-zA-Z0-9]+[a-z@.]*$"
const passwordRule = "^[a-zA-Z0-9!@#$%^&*()_+]{4,8}*$"

emailInput.addEventListener('input', (mailEvent) => {
  const { mailValid, value } = mailEvent.target
  if (value.match(emailRule)){
    console.log({value})
    document.querySelector("#values").innerHTML = ''
    document.querySelector('#submitButton').style.display = ''
  }else {
    document.querySelector("#values").innerHTML = '僅能輸入英文、數字、@ 及 . '
    document.querySelector('#submitButton').style.display = 'none'
  }
})

const checkEmptyInput = () => {
  let inputValue = document.querySelector('#email').value
  if(inputValue.length >= 8){
    console.log('Can submit')
  }else if(inputValue.length < 8){
    document.querySelector("#values").innerHTML = '欄位長度不得小於8'
    document.querySelector('#submitButton').style.display = 'none'
  }
}
