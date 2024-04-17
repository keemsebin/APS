import sys
from collections import deque
MAX = 10 ** 5 + 1
n, k = map(int, sys.stdin.readline().split())
loc = [0] * MAX
# 현재 수빈이의 위치 x에서
# x-1, x+1, 2x 로의 노드가 각각 있다고 생각

q = deque([n])
while q:
    x = q.popleft()
    if x == k:
        print(loc[x])
        exit(0)
    for next_v in (x-1, x+1, x*2):
        if 0 <= next_v < MAX and not loc[next_v]:
            loc[next_v] = loc[x] + 1
            q.append(next_v)

# 문제 풀이 후 모듈화 버전으로도 작성해보았습니다..
# def bfs(x):
#     q = deque([x])
#     while q:
#         x = q.popleft()
#         if x == k:
#             return loc[x]
#         for next_v in (x-1, x+1, x*2):
#             if 0 <= next_v < MAX and not loc[next_v]:
#                 loc[next_v] = loc[v] + 1
#                 q.append(next_v)
# print(bfs(n))