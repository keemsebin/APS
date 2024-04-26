const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const initialMoney = Number(input[0]);
const stock = input[1].split(" ").map(Number);
let jhMoney = initialMoney,
  smMoney = initialMoney;
let jhStock = 0,
  smStock = 0;
// 초기 자본에는 최대한 많은 주식 구입
function BNP() {
  for (let i = 0; i < stock.length; i++) {
    if (jhMoney >= stock[i]) {
      let allowStock = Math.floor(jhMoney / stock[i]);
      jhStock += allowStock;
      jhMoney -= stock[i] * allowStock;
    }
  }
}

function SMA() {
  for (let j = 0; j < stock.length - 3; j++) {
    let first = stock[j];
    let second = stock[j + 1];
    let third = stock[j + 2];
    let current = stock[j + 3];
    if (first > second && second > third && current <= smMoney) {
      let currentStock = Math.floor(smMoney / stock[j + 3]);
      smStock += currentStock;
      smMoney -= stock[j + 3] * currentStock;
    } else if (first < second && second < third && smStock > 0) {
      smMoney += current * smStock;
      smStock = 0;
    }
  }
}

BNP();
SMA();
jhMoney += stock[stock.length - 1] * jhStock;
smMoney += stock[stock.length - 1] * smStock;
if (jhMoney > smMoney) {
  console.log("BNP");
} else if (jhMoney < smMoney) {
  console.log("TIMING");
} else {
  console.log("SAMESAME");
}
