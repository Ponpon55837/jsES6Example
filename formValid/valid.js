const getArr = ['myForm', 'Email', 'UserName', 'Password', 'PasswordConfirm', 'subBtn', 'show', 'showContent']

const getFunc = () => {
  const get = []
  for(let i = 0; i < getArr.length; i++){
    get[i] = document.querySelector(`#${getArr[i]}`)
  }
  return get
}

const ReGet = getFunc()

// const getForm = document.querySelector("#myForm")
// const getEmail = document.querySelector("#Email")
// const getUserName = document.querySelector("#UserName")
// const getPassword = document.querySelector("#Password")
// const getPasswordConfirm = document.querySelector("#PasswordConfirm")
// const getSubBtn = document.querySelector("#subBtn")
// const show = document.querySelector("#show")

ReGet[5].disabled = true

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
// 中文或英文至少三個位元
const nameValid = /[\u4e00-\u9fa5A-Za-z]{3}/
// 至少 8 個字元，要有大小寫字母，至少一個數字
const pswdValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

const addObj = {
  ObjMail: [ReGet[1], emailValid, 'Email長度不符合'],
  ObjName: [ReGet[2], nameValid, 'UserName長度不符合，需至少中文或英文三個位元'],
  ObjPass: [ReGet[3], pswdValid, 'password長度不符合'],
  ObjConfirm: [ReGet[4], 'password第二次輸入與第一次不相符'],
  ObjShow: [ReGet[6]]
}

addObj.ObjMail[0].addEventListener('input', mail => {
  if(!addObj.ObjMail[1].test(mail.target.value)) {
    addObj.ObjShow[0].innerHTML = addObj.ObjMail[2]
  } else {
    addObj.ObjShow[0].innerHTML = ''
  }
})

addObj.ObjName[0].addEventListener('input', name => {
  if(!addObj.ObjName[1].test(name.target.value)) {
    addObj.ObjShow[0].innerHTML = addObj.ObjName[2]
  } else {
    addObj.ObjShow[0].innerHTML = ''
  }
})

addObj.ObjPass[0].addEventListener('input', pass => {
  if(!addObj.ObjPass[1].test(pass.target.value)) {
    addObj.ObjShow[0].innerHTML = addObj.ObjPass[2]
  } else {
    addObj.ObjShow[0].innerHTML = ''
  }
})

addObj.ObjConfirm[0].addEventListener('input', confirm => {
  if(confirm.target.value === ReGet[3].value && ReGet[1].value && ReGet[2].value && ReGet[3].value) {
    addObj.ObjShow[0].innerHTML = ''
    ReGet[5].disabled = false
  } else if(confirm.target.value !== ReGet[3].value) {
    addObj.ObjShow[0].innerHTML = addObj.ObjConfirm[1]
  } else {
    addObj.ObjShow[0].innerHTML = ''
  }
})

window.addEventListener( "load", () => {
  const sendData = async () => {
    // https://hexschool-tutorial.herokuapp.com/api/signup 可以用六角學院的測試網址試試看
    try {
      await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          Email: ReGet[1].value,
          UserName: ReGet[2].value,
          Password: ReGet[3].value
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then(res => res.json())
      .then(result => console.log(result))
    } catch (err) {
      return error.value = err.message
    }
  }
  // ...and take over its submit event.
  ReGet[0].addEventListener('submit', sub => {
    sub.preventDefault()
    sendData()
    for(let e = 1; e <= 4; e++) {
      ReGet[e].value = ''
    }
    ReGet[5].disabled = true
  })
})

const deleteFunc = async () => {
  try {
    await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'DELETE',
    })
    .then(result => console.log('delete access', result))
  } catch(err) {
    return error.value = err.message
  }
}
// const getShowPost = document.querySelector("#showContent")

const showContent = async () => {
  try {
    await fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => console.log(json))
  } catch(err) {
    return error.value = err.message
  }
}
