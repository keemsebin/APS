import sys
from collections import deque

v = int(sys.stdin.readline())
linked = int(sys.stdin.readline())
graph = [[] for _ in range(v + 1)] 
visited = [0] * (v + 1)
for _ in range(linked):
    node, adj_n = map(int, sys.stdin.readline().split())
    graph[node].append(adj_n)
    graph[adj_n].append(node)
# print(graph)
# bfs 시작(index = 1부터 방문하지 않은 노드에 대해서 반복)
visited[1] = 1
q = deque([1])
cnt = 0
while q:
    temp = q.popleft()
    for nx in graph[temp]:
        if visited[nx] == 0:
            visited[nx] = 1
            q.append(nx)
            cnt += 1
print(cnt)