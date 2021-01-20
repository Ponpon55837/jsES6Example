let mySet = new Set()
mySet.add(1)
mySet.add({o: 1})
console.log(mySet)
const root = document.querySelector('#root').innerHTML = mySet.size
