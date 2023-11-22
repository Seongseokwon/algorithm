/**
 * 이중 반복문을 돌면서 인접 원소의 값을 비교하여 정렬을 합니다.
 * 비교하는 과정의 조건문에 따라 오름차순 또는 내림차순으로 정렬할 수 있습니다.
 * 
 * @param {number[]} arr 
 */
function bubbleSort(arr){
  for (let i = arr.length -1; i > 0; i--) {
    for (let j = 0; j < i; j++ ){
      // 조건문의 등호 방향에 따라 오름차순 정렬 또는 내림차순 정렬이 가능하다.
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j+ 1] = temp;
      }
    }
  }
  return arr;
}


const result = bubbleSort([9, 22, 1, 2, 3, 8, 4, 6]);
console.log(result);