import sys

N, M = map(int, sys.stdin.readline().split())
sequence = list(map(int, sys.stdin.readline().split()))

sum = sequence[0]
left = cnt = 0
right = 1
while left <= right and right <= N:
    if sum == M:
        cnt += 1
        sum -= sequence[left]
        left += 1
    elif sum < M:
            if right < N:
                sum += sequence[right]
                right += 1
            else:
                 break
    else:
        sum -= sequence[left]
        left += 1

print(cnt)