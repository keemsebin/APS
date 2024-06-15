import sys

N, M = map(int, sys.stdin.readline().split())

nums = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]

pf = [[0] * (M+1) for _ in range(N+1)]
for i in range(1, N+1):
    for j in range(1, M+1):
        pf[i][j] = pf[i - 1][j] + pf[i][j - 1] + nums[i - 1][j - 1] - pf[i - 1][j - 1]
 
# x1, y1, x2, y2를 증가시켜가며 4중 for문으로 완전탐색
ans = -400000001
for x1 in range(1, N+1):
    for y1 in range(1, M+1):
        for x2 in range(x1, N+1):
            for y2 in range(y1, M+1):
                ans = max(ans, pf[x2][y2] - pf[x2][y1 - 1] - pf[x1 - 1][y2] + pf[x1 - 1][y1 - 1])
print(ans)