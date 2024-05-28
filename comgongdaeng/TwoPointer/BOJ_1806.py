import sys
N, S = map(int, input().split())
sequence = list(map(int, sys.stdin.readline().split()))

left = 0
right = 0
ans = 100000
temp_sum = sequence[0]

while left <= right:
    if temp_sum >= S:
        ans = min(ans, right - left + 1)
        temp_sum -= sequence[left]
        left += 1
    else:
        right += 1
        if right < N:
            temp_sum += sequence[right]
        else:
            break

if ans == 100000:
    print(0)
else:
    print(ans)