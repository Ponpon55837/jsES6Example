let mySet = new Set()
mySet.add(1)
mySet.add({o: 1})
console.log(mySet)
const root = document.querySelector('#root').innerHTML = mySet.size

// getter
const obj = {
  log: ['a', 'b', 'c'],
  get latest() {
    if (this.log.length === 0) {
      return undefined
    }
    return `Latest:${this.log[this.log.length - 1]}, Array: ${this.log}, Array.length:${this.log.length}`
  }
}

console.log(obj.latest)

// function 寫getter的方式
const objFunc = {
  logFunc: ['A', 'B', 'C']
}
const latestFunc = (e) => {
  if(e.length === 0) {
    return undefined
  }
  return `Latest:${e[e.length - 1]}, Array: ${e}, Array.length:${e.length}`
}

console.log(latestFunc(objFunc.logFunc))

// setter
const language = {
  set current(name) {
    this.log.push(name)
  },
  log: []
}

language.current = 'EN'
language.current = 'FA'

console.log(language.log)

// function 寫setter
const langFunc = {
  loggFunc: []
}
const current = (event) => {
  langFunc.loggFunc.push(event)
}

current('TW')
current('JP')

console.log(langFunc.loggFunc)
