const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync('test.txt').toString().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arrA = input[1].split(' ').map(Number);
const arrB = input[2].split(' ').map(Number);

let result = []
let i = 0, j =0;

while(i < N && j < M) {
  if(arrA[i] < arrB[j]) {
    result.push(arrA[i++]);
  }else {
    result.push(arrB[j++]);
  }
  
}

while(i < N ) {
  result.push(arrA[i++]);
}


while(j < M ) {
  result.push(arrB[j++]);
}

console.log(result);