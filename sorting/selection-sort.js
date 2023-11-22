/**
 * 이중 반복문을 돌면서 가장 작은 값을 찾아서 앞으로 이동시켜줍니다.
 * 
 * @param {number[]} arr 
 */
function selectionSort(arr) {

  for (let i = 0; i < arr.length; i++) {
    // 가장 작은 값을 찾아내는 과정
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIdx] > arr[j]) {
        minIdx = j;
      }
    }
    // 가장 작은값 위치를 변경시켜주기
    let temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }

  return arr;
}



selectionSort()