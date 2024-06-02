import sys
import heapq

n = int(sys.stdin.readline())

# 날짜 순으로 정렬
request = [list(map(int, sys.stdin.readline().split())) for _ in range(n)] 
request.sort(key = lambda x : x[1])

q = []

for pay, day in request:
    heapq.heappush(q, pay)
    if day < len(q):
        heapq.heappop(q)

print(sum(q))