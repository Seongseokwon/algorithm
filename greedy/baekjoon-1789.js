/**
 * 서로다른 N개의 자연수읩 합이 S 이다.
 * S를 알 때, N의 최댓값 구하기
 */

const S = 1;



let acc = 0;
let current = 0;

while(acc <= S) {
  current += 1;
  acc += current;
}

console.log(current - 1);