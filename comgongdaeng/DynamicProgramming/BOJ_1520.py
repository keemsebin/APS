import sys
sys.setrecursionlimit(10 ** 9)

m, n = map(int, sys.stdin.readline().split())
maps = [list(map(int, sys.stdin.readline().split())) for _ in range(m)]

# 위치가 maps[x][y]일 때, maps[x][y]
# maps[x+1][y], maps[x-1][y], 
# maps[x][y+1], maps[x][y-1]
#  -> maps[n-1][m-1]까지 도달할 수 있는 경우의 수

dp = [[-1 for _ in range(n)] for _ in range(m)]
dx = [1, -1, 0, 0]
dy = [0, 0, 1, -1]

def dfs(x, y):
    # 마지막에 도착하면 경우의 수 + 1
    if x == m-1 and y == n-1:
        return 1
    if dp[x][y] == -1:
        dp[x][y] = 0

        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            # 이동 가능 범위 내에 있고,
            if 0 <= nx < m and 0 <= ny < n:
                # 내리막길인 경우
                if maps[x][y] > maps[nx][ny]:
                    dp [x][y] += dfs(nx, ny)
    # 이미 탐색한 곳(dp[x][y] != -1:) 또는 탐색할 수 없는 경우(이동 가능 범위 초과 or 내리막 x)
    return dp[x][y]

print(dfs(0, 0))