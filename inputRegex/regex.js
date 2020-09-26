const emailInput = document.querySelector('#email')

const emailRule = "^[a-zA-Z0-9]+[a-z@.]*$"

emailInput.addEventListener('input', (e) => {
  const { mailValid, value } = e.target
  if (value.match(emailRule)){
    console.log({value})
    document.querySelector("#values").innerHTML = ''
  }else {
    document.querySelector("#values").innerHTML = '僅能輸入英文、數字、@ 及 . '
  }
})
