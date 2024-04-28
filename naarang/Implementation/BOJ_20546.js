const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

let start_money = Number(input[0]);
let stock_array = input[1].split(" ").map(Number);

// 보유 현금, 주식 수
let junhyeon = [start_money, 0]; // 첫날 전량 매수
let sungmin = [start_money, 0];

const onPayJunhyeon = (price) => {
  let junhyeon_stock = Math.floor(start_money / price);
  junhyeon[0] = start_money - junhyeon_stock * price;
  junhyeon[1] = junhyeon_stock;
};

let is_finished = false; // 준현 매수 여부
if (stock_array[0] <= start_money) {
  onPayJunhyeon(stock_array[0]);
  is_finished = true;
}

let up_flag = 0;
let down_flag = 0;
for (let i = 1; i < stock_array.length; i++) {
  if (!is_finished && stock_array[i] <= start_money) {
    onPayJunhyeon(stock_array[i]);
    is_finished = true;
  }

  if (stock_array[i] < stock_array[i - 1]) {
    down_flag++;
    up_flag = 0;
  } else if (stock_array[i] > stock_array[i - 1]) {
    up_flag++;
    down_flag = 0;
  }
  if (up_flag >= 3 && sungmin[1] > 0) {
    // 전량 매도
    sungmin[0] = sungmin[0] + sungmin[1] * stock_array[i];
    sungmin[1] = 0;
  } else if (down_flag >= 3 && sungmin[0] >= stock_array[i]) {
    // 전량 매수
    let sungmin_stock = Math.floor(sungmin[0] / stock_array[i]);
    sungmin[0] = sungmin[0] - sungmin_stock * stock_array[i];
    sungmin[1] = sungmin[1] + sungmin_stock;
  }
}

console.log(junhyeon, sungmin);

let junhyeon_result = junhyeon[0] + junhyeon[1] * stock_array[13];
let sungmin_result = sungmin[0] + sungmin[1] * stock_array[13];

if (junhyeon_result === sungmin_result) {
  console.log("SAMESAME");
} else if (junhyeon_result < sungmin_result) {
  console.log("TIMING");
} else {
  console.log("BNP");
}
