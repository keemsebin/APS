import sys

N = int(sys.stdin.readline())
drinks = sorted(map(int, sys.stdin.readline().split()))

# 버리는 양을 최소로 -> 적은 양의 음료수를 1/2 버려야 함
ans = drinks[-1]
for i in range(N-1):
    ans += drinks[i] / 2

print(ans)