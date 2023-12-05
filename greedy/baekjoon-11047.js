const fs = require("fs");
const input = fs.readFileSync("./test.txt").toString().split("\n");

let [typeCnt, total] = input[0].split(" ");

const money = [];

for (let i = 1; i <= typeCnt; i++) {
  money.push(Number(input[i]));
}

let result = 0;
for (let i = typeCnt - 1; i >= 0; i--) {
  result += parseInt(total / money[i]);
  total %=  money[i];
}

console.log(result);
