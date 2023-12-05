const arr= [3, 1, 4, 3, 2];
const h = [];

/**
 * 내 풀이 
*/
let total = 0;
let acc = 0;

for(let i = 0; i < arr.length; i++) {
  h.push([i, arr[i]]);
}
h.sort((a, b) => a[1] - b[1]);
for(let i = 0; i < h.length; i++) {
  if (acc === 0) {
    total = acc = h[i][1];
  } else {
    acc += h[i][1]
    total += acc;
  }
}
console.log(total);

/**
 * 강의 풀이
 */
const arr2 = [3, 1, 4, 3, 2];
arr2.sort((a, b) => a - b);

let answer = 0;
let summary = 0;
for (let i = 0; i < arr2.length; i++) {
  summary += arr2[i];
  answer += summary;
}
console.log(answer);