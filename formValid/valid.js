const getEmail = document.querySelector("#Email")
const getUserName = document.querySelector("#UserName")
const getPassword = document.querySelector("#Password")
const getPasswordConfirm = document.querySelector("#PasswordConfirm")
const getSubBtn = document.querySelector("#subBtn")
getSubBtn.disabled = true

const show = document.querySelector("#show")

// (1) 必須以一個以上的文字&數字開頭
// (2) @ 之前可以出現 1 個以上的文字、數字與「-」的組合，例如 -abc-
// (3) @ 之前可以出現 1 個以上的文字、數字與「.」的組合，例如 .abc.
// (4) @ 之前以上兩項以 or 的關係出現，並且出現 0 次以上
// (5) 中間一定要出現一個 @
// (6) @ 之後出現一個以上的大小寫英文及數字的組合
// (7) @ 之後只能出現「.」或是「-」，但這兩個字元不能連續時出現
// (8) @ 之後出現 0 個以上的「.」或是「-」配上大小寫英文及數字的組合
// (9) @ 之後出現 1 個以上的「.」配上大小寫英文及數字的組合，結尾需為大小寫英文
const emailValid = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
// 中文或英文或數字至少三個位元
const nameValid = /[\u4e00-\u9fa50-9A-Za-z]{3}/
// 至少 8 個字元，要有大小寫字母，至少一個數字
const pswdValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

getEmail.addEventListener('input', mail => {
  if(!emailValid.test(mail.target.value)) {
    show.innerHTML = 'Email長度不符合'
  } else {
    show.innerHTML = ''
  }
})

getUserName.addEventListener('input', name => {
  if(!nameValid.test(name.target.value)) {
    show.innerHTML = 'UserName長度不符合，需至少中英文或數字三個位元'
  } else {
    show.innerHTML = ''
  }
})

getPassword.addEventListener('input', pass => {
  if(!pswdValid.test(pass.target.value)) {
    show.innerHTML = 'password長度不符合'
  } else {
    show.innerHTML = ''
  }
})

getPasswordConfirm.addEventListener('input', confirm => {
  if(confirm.target.value === getPassword.value && getEmail.value && getUserName.value && getPassword.value) {
    show.innerHTML = ''
    getSubBtn.disabled = false
  } else if(confirm.target.value !== getPassword.value) {
    show.innerHTML = 'password第二次輸入與第一次不相符'
  } else {
    show.innerHTML = ''
  }
})

window.addEventListener( "load", () => {
  const sendData = () => {
    const XHR = new XMLHttpRequest()
    // Bind the FormData object and the form element
    const FD = new FormData(form)
    // Define what happens on successful data submission
    XHR.addEventListener( "load", lo => {
      alert( event.target.responseText )
    } )
    // Define what happens in case of error
    XHR.addEventListener( "error", err => {
      alert( 'Oops! Something went wrong.' )
    } )
    // Set up our request
    XHR.open( "POST", "https://example.com/cors.php" )
    // The data sent is what the user provided in the form
    XHR.send( FD )
  }
  // ...and take over its submit event.
  getSubBtn.addEventListener('click', sub => {
    sub.preventDefault()
    sendData()
  })
})
