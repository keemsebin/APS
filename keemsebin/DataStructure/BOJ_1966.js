const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const len = input.shift();
const result = [];

for (let i = 0; i < len; i++) {
  const [currentNum, important] = input.shift().split(" ").map(Number);

  let arr = input.shift().split(" ").map(Number);
  const queue = arr.map((v, i) => ({
    idx: i === important,
    val: v,
  }));

  let output = 0;

  while (true) {
    const max = Math.max(...queue.map((doc) => doc.val));
    // [5]
    if (queue[0].val === max) {
      output++;
      if (queue[0].idx) {
        result.push(output);
        break;
      } else {
        queue.shift();
      }
    } else {
      queue.push(queue.shift());
    }
  }
}

console.log(result.join("\n"));
