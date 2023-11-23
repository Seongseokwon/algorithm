function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    // 반복적으로 왼쪽으로 이동 시켜줄 것이기 때문에 아래와 같이 반복문을 작성한다. 
    for (let j = i; j > 0; j--) {
      // 이전 원소보다 값이 작다면 위치를 바꿔준다.
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else {
        // 그렇지 않은경우 더이상 진행할 필요가 없다.
        break;
      }
    }
  }

  return arr;
}
