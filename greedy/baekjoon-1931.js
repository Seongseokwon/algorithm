const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync('test.txt').toString().split('\n');

const n = Number(input[0]);

const meetingRoom = [];

for(let i = 0; i < n; i++) {
  meetingRoom.push(input[i+1].split(' ').map(Number));
}

meetingRoom.sort((a, b) => {
  if (a[1] !== b[1]) return a[1] - b[1];
  else return a[0] - b[0];
});

let answer = 1;
let endTime = meetingRoom[0][1];
for(let i = 1; i < n; i++) {
  let startTime = meetingRoom[i][0];
  if(endTime <= startTime) {
    endTime = meetingRoom[i][1]
    answer++;
  }
}
console.log(answer);