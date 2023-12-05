/**
 * 뺄셈 연산자를 기준으로 그룹 지어주기
 */

const str = '10+20+30+40';

let result = 0;
const splitNum = str.split('-');

for (let i = 0; i < splitNum.length; i++) {
  let cur = splitNum[i].split('+').map(Number).reduce((a, b) => a+ b);
  if (i === 0 ) result = cur;
  else result -= cur;
}

console.log(result);
