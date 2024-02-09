const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync('test.txt').toString().split('\n');

const [n, k] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);