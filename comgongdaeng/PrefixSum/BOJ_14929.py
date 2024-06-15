import sys

n = int(sys.stdin.readline())
arr = list(map(int, sys.stdin.readline().split()))

# ans = x1 * (x2 + x3 + ... + xn) + x2 * (x3 + x4 + ... + xn) + ... + xn-1 * xn
prefix_sum = [arr[0]]

for i in range(1, n):
    prefix_sum.append(prefix_sum[i-1] + arr[i])

ans = 0
for i in range(n-1):
    ans += arr[i] * (prefix_sum[n-1] - prefix_sum[i])

print(ans)