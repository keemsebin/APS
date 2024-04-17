import sys
from collections import deque
v = int(sys.stdin.readline())
t = [[] for _ in range(v+1)]
for i in range(v):
    e = list(map(int, sys.stdin.readline().split()))
    node = e[0]
    # 맨 앞 현재 노드와, 맨 뒤 -1은 빼고 반복
    for j in range(1, len(e)-2, 2):
        adj_n, cost = e[j], e[j+1]
        t[node].append((adj_n, cost))

def bfs(start):
    visited = [-1] * (v+1)
    q = deque()
    q.append(start)
    visited[start] = 0
    # 거리와 해당 노드(bfs 두 번 사용하기 위해 노드도 저장)
    max_dist = [0,0]

    while q:
        temp = q.popleft()
        for n, c in t[temp]:
            # 방문하지 않은 노드 검색
            if visited[n] == -1:
                visited[n] = visited[temp] + c
                q.append(n)
                if max_dist[0] < visited[n]:
                    max_dist = visited[n], n
    return max_dist

dist, node = bfs(1)
dist, node = bfs(node)
print(dist)