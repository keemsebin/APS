const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let arr = input.slice(1);
  let result = [];
  arr.map((str) => {
    let len = str.length;
    let left = 0;
    let right = len - 1;
    let isPalin = true;

    while (left < right) {
      if (str[left] !== str[right]) {
        isPalin = false;
        if (
          isPalindrome(str, left + 1, right) ||
          isPalindrome(str, left, right - 1)
        ) {
          result.push(1);
          break;
        } else {
          result.push(2);
          break;
        }
      }
      left++;
      right--;
    }
    if (isPalin) {
      result.push(0);
      return;
    }
    function isPalindrome(str, left, right) {
      while (left < right) {
        if (str[left] !== str[right]) {
          return false;
        }
        left++;
        right--;
      }
      return true;
    }
  });
  console.log(result.join("\n"));
});
