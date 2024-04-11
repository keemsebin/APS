const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const len = Number(input.shift());

const sequence = [];
let result = [];

let idx = 0;

for (let i = 0; i < len; i++) {
  let num = Number(input[i]);

  if (!sequence.includes(num)) {
    const iter = num - idx;
    for (let j = 0; j < iter; j++) {
      sequence.push(idx + 1);
      result.push("+");
      idx++;
    }
    result.push("-");
    sequence.pop();
  } else if (sequence.includes(num)) {
    // const iter2 =  idx-num;
    if (num == sequence[sequence.length - 1]) {
      // for (let k =0; k< iter2; k++){
      result.push("-");
      sequence.pop();
      // }
    } else {
      result = ["NO"];
      break;
    }
  }
}
if (result[0] != "NO") console.log(result.join("\n"));
else console.log("NO");
