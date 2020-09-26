const emailInput = document.querySelector('#email')

emailInput.addEventListener('input', (e) => {
  const { mailValid, value } = e.target
  if (value.match("^[a-zA-Z0-9@.]*$")){
    console.log({value})
    document.querySelector("#values").innerHTML = ''
  }else {
    document.querySelector("#values").innerHTML = '僅能輸入英文、數字、@ 及 . '
  }
})
