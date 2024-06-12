const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let str = input[0];
  let ans = "";
  let isJava = false;
  let isCpp = false;
  let isErr = false;
  let cnt = 0;

  if (
    str[0] === "_" ||
    str[str.length - 1] === "_" ||
    str[0] == str[0].toUpperCase()
  ) {
    isErr = true;
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "_") {
      isCpp = true;
    }
    if (str[i] === str[i].toUpperCase() && str[i] !== "_") {
      isJava = true;
    }
    if (str[i] === "_" && str[i + 1] === "_") {
      isErr = true;
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      cnt++;
    }
  }

  if (cnt === str.length) {
    isCpp = true;
  }
  if (isCpp && isJava) {
    isErr = true;
  }

  if (isErr) {
    console.log("Error!");
  } else if (isCpp) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "_") {
        ans += str[i + 1].toUpperCase();
        i++;
      } else {
        ans += str[i];
      }
    }
    console.log(ans);
  } else if (isJava) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i].toUpperCase()) {
        ans += "_" + str[i].toLowerCase();
      } else {
        ans += str[i];
      }
    }
    console.log(ans);
  } else {
    console.log(str);
  }
});
