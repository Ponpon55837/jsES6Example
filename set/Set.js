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

// 返回值閉包
const fn = () => {
  let name = 'Jully'
  return () => name
}

let fakeFn = fn()
console.log(fakeFn())

// 函式賦值閉包
let fn2
const fnc = () => {
  let name = "Jane"
  //將函式賦值給fn2
  fn2 = () => {
    return name
  }
}
fnc()//要先執行進行賦值，
console.log(fn2())//執行輸出fn2

// 函式引數閉包
const func3 = () => {
  let name = "Jacky"
  return callback = () => {
  	return name
  }
}
let var1 = func3()//執行函式將返回值（callback函式）賦值給var1，

const func32 = f3 => {
//將函式作為引數傳入
  console.log(f3())//執行函式，並輸出
}
func32(var1)//執行輸出var1

// 迴圈賦值閉包
//每秒執行1次，分別輸出1-10
for(let i = 1; i <= 10; i++){
	(j => {
		//j來接收
		setTimeout(() => {
			console.log(j)
		}, j * 1000)
	})(i)//i作為實參傳入
}

// IIFE自執行函式閉包 ??有點問題 需要解決
// (() => {
// 	let iifeName = "Johnson"
// 	let iifeFunc = () => {
// 		return iifeName
// 	}
// 	//直接在自執行函式裡面呼叫fn2，將fn1作為引數傳入
// 	iifeFunc2(iifeFunc)
// })()
// const iifeFunc2 = iife => {
// 	//將函式作為引數傳入
// 	console.log(iife())//執行函式，並輸出
// }

// getter setter 閉包
const getsetFunc = () => {
	let name = 'Jason'
	setName = n => {
		name = n
	}
	getName = () => {
		return name
	}
	//將setName，getName作為物件的屬性返回
	return {
		setName:setName,
		getName:getName
	}
}
let getsetFuncTest = getsetFunc()//返回物件，屬性setName和getName是兩個函式
console.log(getsetFuncTest.getName())//getter
getsetFuncTest.setName('world')//setter修改閉包裡面的name
console.log(getsetFuncTest.getName())//getter

// 迭代器（執行一次函式往下取一個值）閉包
let arr =['aa', 'bb', 'cc']
const incre = arr => {
	let i = 0
	return () => {
		//這個函式每次被執行都返回陣列arr中 i下標對應的元素
	  return arr[i++] || '陣列值已經遍歷完'
	}
}
let next = incre(arr)
console.log(next())//aa
console.log(next())//bb
console.log(next())//cc
console.log(next())//陣列值已經遍歷完

// 首次區分（相同的引數，函式不會重複執行）閉包
const seperate = (() => {
  let arr = []//用來快取的陣列
  return (val) => {
    if(arr.indexOf(val) == -1) {//快取中沒有則表示需要執行
      arr.push(val)//將引數push到快取陣列中
      console.log('函式被執行了', arr)
     //這裡寫想要執行的函式
    }else{
      console.log('此次函式不需要執行')
    }
    console.log('函式呼叫完列印一下，方便檢視已快取的陣列：', arr)
  }
}) ()

seperate(10)
seperate(10)
seperate(1000)
seperate(200)
seperate(1000)

// 快取閉包
//比如求和操作，如果沒有快取，每次呼叫都要重複計算，採用快取已經執行過的去查詢，查詢到了就直接返回，不需要重新計算 有問題 需解決
// const cacheFucn = (() => {
//   let cache = {}//快取物件
//   const calc = (arr) => {//計算函式
// 	  let sum=0
// 	  //求和
// 	  for(let i = 0; i < arr.length; i++) {
// 		  sum += arr[i]
// 	  }
// 	  return sum
//   }
//
//  	return () => {
//  		let args = Array.prototype.slice.call(arguments, 0)//arguments轉換成陣列
//  		let key = args.join(",")//將args用逗號連線成字串
// 	 	let result, tSum = cache[key]
// 	 	if(tSum) {//如果快取有
// 	 		console.log('從快取中取：', cache)//列印方便檢視
// 	 		result = tSum
// 	 	}else {
// 	 		//重新計算，並存入快取同時賦值給result
// 		 	result = cache[key] = calc(args)
// 		 	console.log('存入快取：', cache)//列印方便檢視
// 	 	}
// 	 	return result
//  	}
// }) ()
// cacheFucn(1,2,3,4,5)
// cacheFucn(1,2,3,4,5)
// cacheFucnfn(1,2,3,4,5,8)
// cacheFucn(1,2,3,4,5,6)


//  閉包切換字體大小
const makeSizer = (size) => {
  return () => {
    document.body.style.fontSize = size + 'rem'
  }
}
let small = makeSizer(0.8)
let normal = makeSizer(1.3)
let big = makeSizer(1.7)

document.getElementById('small').onclick = small
document.getElementById('normal').onclick = normal
document.getElementById('big').onclick = big

// 閉包計算金額
const storeMoney = (name, cash) => {
	let wallet = 1000
  let i = 0
  let vali = /^[0-9] .?[0-9]*/
	return (name, cash) => {
    if(name !== '' && Number(cash)) {
      i++
      wallet = wallet + cash
      // cash存在，回返wallet + cash的值
      console.log(`${name}本次增減金額：${cash}`)
    } else {
      i++
      console.log(`${name}輸入金額'${cash}',請確定輸入金額,目前剩餘可用額度：${wallet}`)
    }
    console.log(`${name}第${i}次使用錢包`, `剩餘金額：${wallet}`)
		return wallet
	}
}
const myPocket = storeMoney() // 原先寫成storeMoney()(20)

const inputData = () => {
  let storeName = document.querySelector("#storeName").value
  let money = Number(document.querySelector("#money").value)

  myPocket(storeName, money)
}
// let yourPocket = storeMoney()
// myPocket('John', 20)
// myPocket('John', 40)
// myPocket('John', 'aaa')
// myPocket('John', -20)
// myPocket('John', )
// yourPocket('Hully', 50)
// yourPocket('Hully', -70)
