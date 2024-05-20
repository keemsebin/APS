import sys

n = int(sys.stdin.readline())
wine = [0] + [int(sys.stdin.readline()) for _ in range(n)]
dp = [0] * (n + 1)
dp[1] = wine[1]
# 세 잔 연속 마실 수 없다?
# (1) 현재(i) 포도주를 먹지 않는다 == dp[i-1]
# (2) i-1, i 마시고 i-2는 마시지 않는다
# (3) i-2, i 마시고 i-1은 마시지 않는다
if n > 1:
    dp[2] = wine[1] + wine[2]

for i in range(3, n+1):
    dp[i] = max(dp[i-1], dp[i-3] + wine[i-1] + wine[i], dp[i-2] + wine[i])

print(dp[n])