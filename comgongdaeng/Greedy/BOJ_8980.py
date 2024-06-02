import sys

N, C = map(int, sys.stdin.readline().split())
M = int(sys.stdin.readline())

# 빠른 도착지의 물건을 먼저 싣는다
lists = [list(map(int, sys.stdin.readline().split())) for _ in range(M)]
lists.sort(key = lambda x: x[1])

box = [C] * (N + 1)
ans = 0
for s, d, cnt in lists:
    minV = C
    # 박스의 개수만큼 용량에서 빼기
    for i in range(s, d):
        if minV > min(box[i], cnt):
            minV = min(box[i], cnt)
    for i in range(s, d):
        box[i] -= minV
    ans += minV 

print(ans)   