import sys

s = set()
count = 0
n, m = map(int, sys.stdin.readline().split())

for _ in range(n):
    data = sys.stdin.readline().rstrip()
    s.add(data) 

for _ in range(m):
    data = sys.stdin.readline().rstrip()
    if data in s:
        count+=1
print(count)
