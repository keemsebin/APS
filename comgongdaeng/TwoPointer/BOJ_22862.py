import sys

N, K = map(int, sys.stdin.readline().split())
sequence = list(map(int, sys.stdin.readline().split()))

left = right = 0
# 연속부분수열 내에서 홀수의 개수
cnt = 0
res = 0

while right < N:
    # 홀수의 개수가 K 보다 크다면 홀수를 제거해야 정답이 될 수 있음.
    # 홀수를 만나면 left를 옮겨가며 탐색범위를 좁힌다
    if cnt > K:
        if sequence[left] % 2 == 1:
            cnt -= 1
        left += 1
        continue
    # 홀수의 개수가 K보다 작은 경우, 전체 짝수의 개수가 정답이 됨
    # 홀수를 만나면, right를 옮겨가며 탐색범위를 늘린다
    else:
        if sequence[right] % 2 == 1:
            cnt += 1
        right += 1
    res = max(res, right - left - cnt)

print(res)