const fs = require("fs");
const input = fs.readFileSync("./test.txt").toString().split("\n");

const [n, k] =input[0].split(' ').map(Number);

let total = k;
let result = 0;

for(let i = n ; i >= 1; i--) {
  console.log(input[i]);
  result += parseInt(total / Number(input[i]));
  total %= Number(input[i]);
}


console.log(result);















// let [typeCnt, total] = input[0].split(" ");

// const money = [];

// for (let i = 1; i <= typeCnt; i++) {
//   money.push(Number(input[i]));
// }

// let result = 0;
// for (let i = typeCnt - 1; i >= 0; i--) {
//   result += parseInt(total / money[i]);
//   total %=  money[i];
// }

// console.log(result);
