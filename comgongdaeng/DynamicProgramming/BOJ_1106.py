import sys
import math

c, n = map(int, sys.stdin.readline().split())
# dp[i] i명의 고객을 늘리기 위한 최소 비용
dp = [math.inf] * (c+100)
dp[0] = 0
costs = [list(map(int, sys.stdin.readline().split())) for _ in range(n)]
for cost, guest in costs:
    for i in range(guest, len(dp)):
        dp[i] = min(dp[i-guest]+ cost, dp[i])

# c 이상의 고객을 늘리는 비용 중 최솟값
print(min(dp[c:]))