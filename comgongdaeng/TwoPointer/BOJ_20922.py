import sys

N, K = map(int, sys.stdin.readline().split())
sequence = list(map(int, sys.stdin.readline().split()))
left, right = 0, 0

counts = [0] * (max(sequence) + 1)
ans = 0

while right < N:
    if counts[sequence[right]] < K:
        counts[sequence[right]] += 1
        right += 1

    else:
        counts[sequence[left]] -= 1
        left += 1
    ans = max(ans, right - left)
print(ans)