const randomKeyValue = () => {
  return Math.random().toString(36).substr(2,10) + Date.now().toString(36).substr(4,10)
}

const root = document.querySelector('#root').innerHTML = randomKeyValue()
