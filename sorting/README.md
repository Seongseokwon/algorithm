# 정렬 알고리즘 정리

## 선택 정렬
  - 매 단계에서 가장 작은 원소를 선택해서 앞으로 보내는 정렬 방법입니다.
  - 시간 복잡도 O(N²)
  - [ 선택 정렬 구현 ](https://github.com/Seongseokwon/algorithm/blob/main/sorting/selection-sort.js) 
  

## 버블 정렬
  - 인접한 두 원소를 확인하여, 정렬이 안되어 있다면 위치를 서로 변경합니다.
  - 더 큰 원소가 뒤로 갈 수 있도록 정렬합니다.
  - 시간 복잡도 O(N²)
  - [ 버블 정렬 구현 ](https://github.com/Seongseokwon/algorithm/blob/main/sorting/bubble-sort.js) 


## 삽입 정렬
  - 원소를 적적한 위치에 삽입하는 정렬 방법입니다.
  - 케이스에 따라 시간복잡도가 달라집니다. <br>
    정렬이 되있는 경우: O(N) <br>
    정렬이 되있지 않은경우: 최대 O(N²) 
  - [ 삽입 정렬 구현 ](https://github.com/Seongseokwon/algorithm/blob/main/sorting/insertion-sort.js) 


## 병합 정렬
  - 병합 정렬은 분할 정복을 이용하는 가장 기본적인 정렬 알고리즘 입니다.
- 총 원소의 개수가 N개일 때, O(N)의 시간 복잡도가 요구됩니다.
