const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let ip = [];
  let parts = input[0].split(":");
  let compressed = false;
  let cnt = 0;

  parts.forEach((str) => {
    if (str === "") {
      if (!compressed) {
        ip.push(""); // 마커로 사용
        compressed = true;
      }
    } else {
      cnt++;
      if (str.length < 4) {
        let len = 4 - str.length;
        let temp = "";
        for (let i = 0; i < len; i++) {
          temp += "0";
        }
        temp += str;
        ip.push(temp);
      } else {
        ip.push(str);
      }
    }
  });

  if (compressed) {
    let len = 8 - cnt;
    let zeroes = new Array(len).fill("0000");
    let index = ip.indexOf("");
    ip.splice(index, 1, ...zeroes);
    // index에 zeores를 넣고, ""를 지움
  }

  console.log(ip.join(":"));
});
