/**
 * 뺄셈 연산자를 기준으로 그룹 지어주기
 */

const fs = require('fs');
const input = fs.readFileSync('./test.txt').toString().split('\n');

const group = input[0].split('-');

let answer = 0;
for(let i = 0; i < group.length; i++ ){
  let cur = group[i].split('+').map(Number).reduce((a, b) => a + b);
  if (i ===0 ) answer += cur;
  else answer -= cur;
}

console.log(answer);