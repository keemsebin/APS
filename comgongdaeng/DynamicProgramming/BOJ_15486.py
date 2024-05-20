import sys

n = int(sys.stdin.readline())
dp = [0] * (n+1)

for i in range(1, n+1):
    t, p = map(int, sys.stdin.readline().split())
    dp[i] = max(dp[i-1], dp[i])
    # i번째 날의 상담을 할 수 있는 경우
    if i + t - 1 <= n:
        dp[i+t-1] = max(dp[i-1] + p, dp[i+t-1])
print(dp[-1])