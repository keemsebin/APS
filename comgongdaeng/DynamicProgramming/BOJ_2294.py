import sys

n, k = map(int, sys.stdin.readline().split())
# c1 * n1 + c2 * n2 + ... + cn * nn = k
# min(n1 + n2 + ...)

coins = []
for i in range(n):
    coins.append(int(sys.stdin.readline()))
# max(k) + 1 로 초기화
dp = [10001] * (k+1)
dp[0] = 0

for coin in coins:
    for i in range(coin, k+1) :
        dp[i] = min(dp[i], dp[i-coin]+1)
if dp[k] == 10001:
    print(-1)
else: print(dp[k])