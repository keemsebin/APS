import sys
input = sys.stdin.readline
N = int(input())
diffs = list(map(int, input().split()))
Q = int(input())

res = [0] * N
for i in range(N - 1):
    if diffs[i + 1] < diffs[i]:
        res[i] = 1

pref_sum = [0] * (N+1)
for i in range(1, N + 1):
    pref_sum[i] = pref_sum[i-1] + res[i-1]
for _ in range(Q):
    i, j = map(int, input().split())
    print(pref_sum[j-1] - pref_sum[i-1])