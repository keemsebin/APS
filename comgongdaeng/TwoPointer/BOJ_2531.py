import sys
N, d, k, c = map(int, sys.stdin.readline().split())
sushi = [int(sys.stdin.readline()) for _ in range(N)]
# 초밥을 [k개만큼 자른 것 + c] 중 최대 개수
max_cnt = 0
for i in range(N):
    if i + k <= N:
        tmp = set(sushi[i:i+k])
    else:
        tmp = set(sushi[i:])
        tmp.update(sushi[:(i+k)%N])
    tmp.add(c)
    max_cnt = max(max_cnt, len(tmp))
print(max_cnt)