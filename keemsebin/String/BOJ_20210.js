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

  arr.sort(compareStrings);

  function compareStrings(a, b) {
    let i = 0,
      j = 0;

    while (i < a.length || j < b.length) {
      const isADigit = i < a.length && a[i] >= "0" && a[i] <= "9";
      const isBDigit = j < b.length && b[j] >= "0" && b[j] <= "9";

      if (isADigit && isBDigit) {
        let startA = i,
          startB = j;

        while (i < a.length && a[i] >= "0" && a[i] <= "9") i++;
        while (j < b.length && b[j] >= "0" && b[j] <= "9") j++;

        const numA = a.slice(startA, i);
        const numB = b.slice(startB, j);

        if (numA.length !== numB.length) {
          return numA.length - numB.length;
        }

        if (numA !== numB) {
          return numA > numB ? 1 : -1;
        }
      } else if (isADigit || isBDigit) {
        return isADigit ? -1 : 1;
      } else {
        if (a[i].toLowerCase() !== b[j].toLowerCase()) {
          return a[i].toLowerCase() > b[j].toLowerCase() ? 1 : -1;
        }
        if (a[i] !== b[j]) {
          return a[i] > b[j] ? 1 : -1;
        }
        i++;
        j++;
      }
    }

    return a.length - b.length;
  }

  console.log(arr.join("\n"));
});
