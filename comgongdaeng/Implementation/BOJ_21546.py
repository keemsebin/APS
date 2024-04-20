import sys

# 남은 현금, 보유 주식 수
cash = int(sys.stdin.readline())
bnp = [cash, 0]
timing = [cash, 0]
prices = list(map(int, sys.stdin.readline().split()))
# BNP
# 주가가 현금보다 낮으면, 매수((현금 / 주가)만큼)
for price in prices:
    num = 0
    if price <= bnp[0]:
        num = int(bnp[0] / price)
        bnp[0] -= num * price
        bnp[1] += num

# 33
# 대결 기간이 14일 뿐이므로 성민이가 매수, 매도할 날을 미리 계산해둠
buy_sell = [0] * len(prices)
for i in range(len(prices)-3):
    if prices[i] < prices[i+1]:
        if prices[i+1] < prices[i+2]:
            buy_sell[i+3] = 'sell'
    elif prices[i] > prices[i+1]:
        if prices[i+1] > prices[i+2]:
            buy_sell[i+3] = 'buy'
 
for i in range(len(prices)):
    num = 0
    if buy_sell[i] == 'buy':
        num = int(timing[0] / prices[i])
        timing[0] -= num * prices[i]
        timing[1] += num
    elif buy_sell[i] == 'sell':
        timing[0] += timing[1] * prices[i]
        timing[1] = 0
    
if timing[0]+prices[13]*timing[1] == bnp[0]+prices[13]*bnp[1]:
    print("SAMESAME")
elif timing[0]+prices[13]*timing[1] < bnp[0]+prices[13]*bnp[1]:
    print("BNP")
else: print("TIMING")
