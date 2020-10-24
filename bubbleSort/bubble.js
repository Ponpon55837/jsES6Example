const bubbleSort = (arr) => {
  // 設定值長度
  let toIndex = arr.length
  // 判斷值的存在，不使用!=0，因為避免有負數
  while (toIndex > 1) {
    toIndex--
    for (let i = 0; i < toIndex; i++) {
      // 如果前面的元素比後面的元素要大，則交換元素位置
      if (arr[i] > arr[i + 1]) {
        let tempValue = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = tempValue
      }
    }
  }
  return arr
}

const array = [5, 3, 8, 2, 1, 4]

const root = document.querySelector('#root').innerHTML = "Bubble Sort Array: " + bubbleSort(array)
