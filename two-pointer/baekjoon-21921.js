const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync('test.txt').toString().split('\n');


const [n, x] = input[0].split(' ').map(Number);
let arr = [0, ...input[1].split(" ").map(Number)];

let sum = 0;
for (let i = 1; i <=n; i++) {
  if ( i <= x ) sum += arr[i];
}

let maxSum = sum;
let count = 1;

let left = 1;
let right = x;

while(true) {
  left += 1;
  right +=1;
  if(right > n) break;
  sum = sum + arr[right] - arr[left - 1]
  if (maxSum === sum) count += 1;
  else if ( maxSum < sum) {
    maxSum = sum;
    count = 1;
  }
}

if (maxSum === 0) console.log('SAD');
else {
  console.log(maxSum);
  console.log(count);
}