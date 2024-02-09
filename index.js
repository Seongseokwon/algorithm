const fs = require("fs");
const input = fs.readFileSync("./test.txt").toString().split("\n");

const findSet = input[0].split(' ').map(Number)
const pieceSet = [1, 1, 2, 2, 2, 8];
const answer = [];

for(let i = 0; i < pieceSet.length; i++) {
  answer.push(pieceSet[i] - findSet[i])
}

console.log(answer.join(' '));