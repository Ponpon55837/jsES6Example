const getArr = ['myForm', 'Email', 'UserName', 'Password', 'PasswordConfirm', 'subBtn', 'show', 'showContent']

const getFunc = () => {
  const get = []
  for(let i = 0; i < getArr.length; i++){
    get[i] = document.querySelector(`#${getArr[i]}`)
  }
  return get
}

// const getForm = document.querySelector("#myForm")
// const getEmail = document.querySelector("#Email")
// const getUserName = document.querySelector("#UserName")
// const getPassword = document.querySelector("#Password")
// const getPasswordConfirm = document.querySelector("#PasswordConfirm")
// const getSubBtn = document.querySelector("#subBtn")
// const show = document.querySelector("#show")

getFunc()[5].disabled = true

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

getFunc()[1].addEventListener('input', mail => {
  if(!emailValid.test(mail.target.value)) {
    getFunc()[6].innerHTML = 'Email長度不符合'
  } else {
    getFunc()[6].innerHTML = ''
  }
})

getFunc()[2].addEventListener('input', name => {
  if(!nameValid.test(name.target.value)) {
    getFunc()[6].innerHTML = 'UserName長度不符合，需至少中英文或數字三個位元'
  } else {
    getFunc()[6].innerHTML = ''
  }
})

getFunc()[3].addEventListener('input', pass => {
  if(!pswdValid.test(pass.target.value)) {
    getFunc()[6].innerHTML = 'password長度不符合'
  } else {
    getFunc()[6].innerHTML = ''
  }
})

getFunc()[4].addEventListener('input', confirm => {
  if(confirm.target.value === getFunc()[3].value && getFunc()[1].value && getFunc()[2].value && getFunc()[3].value) {
    getFunc()[6].innerHTML = ''
    getFunc()[5].disabled = false
  } else if(confirm.target.value !== getFunc()[3].value) {
    getFunc()[6].innerHTML = 'password第二次輸入與第一次不相符'
  } else {
    getFunc()[6].innerHTML = ''
  }
})

window.addEventListener( "load", () => {
  const sendData = async () => {
    // https://hexschool-tutorial.herokuapp.com/api/signup 可以用六角學院的測試網址試試看
    await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        UserName: getFunc()[2].value,
        Email: getFunc()[1].value,
        Password: getFunc()[3].value
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then(res => res.json())
    .then(result => console.log(result))
    .catch(err => console.log('error', err))
  }
  // ...and take over its submit event.
  getFunc()[0].addEventListener('submit', sub => {
    sub.preventDefault()
    sendData()
  })
})

const deleteFunc = async () => {
  await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
  })
  .then(result => console.log('delete access'))
}
const getShowPost = document.querySelector("#showContent")

const showContent = async () => {
  await fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json))
}
