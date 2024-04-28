import sys

n, m = map(int, sys.stdin.readline().split())
# 20 좌석 씩 n 개의 기차
train = [[0 for _ in range(20)] for _ in range(n)]
state = []
for i in range(m):
    comm = list(map(int, sys.stdin.readline().split()))
    if comm[0] == 1:
        train[comm[1]-1][comm[2]-1] = 1
    elif comm[0] == 2:
        train[comm[1]-1][comm[2]-1] = 0
    elif comm[0] == 3:
        for j in range(19, 0, -1):
            train[comm[1]-1][j] = train[comm[1]-1][j-1]
        train[comm[1]-1][0] = 0
    elif comm[0] == 4:
        for j in range(19):
            train[comm[1]-1][j] = train[comm[1]-1][j+1]
        train[comm[1]-1][19] = 0
cnt = 0
for i in range(n):
    if train[i] not in state:
        cnt += 1
        state.append(train[i])
print(cnt)