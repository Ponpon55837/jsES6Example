function *idMaker() {
  let index = 0

  while(true) {
    yield index++
    if (index > 3) {
      break
    }
  }
}

// 產生器的功能，但是這個只存在ES6中，在後續ES7中就很少被使用了
for (let i of idMaker()) {
  document.querySelector('#root').innerHTML = i
  console.log(i)
}
