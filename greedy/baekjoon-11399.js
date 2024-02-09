const fs = require("fs");
const input = fs.readFileSync("./test.txt").toString().split("\n");


const [n] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number).sort();

let accumulate = 0;
let result = 0;

for(let i = 0; i < n; i++) {
  accumulate += arr[i];
  result +=  accumulate;
}

console.log(result)

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