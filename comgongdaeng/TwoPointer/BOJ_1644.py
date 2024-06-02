import sys
N = int(sys.stdin.readline())

# 에라토스테네스의 체
# 2, 3, 5, 7의 배수를 제거
a = [False, False] + [True] * (N-1)
prime_num = []

for i in range(2, N + 1):
    if a[i]:
        prime_num.append(i)
        for j in range(2*i, N+1, i):
            a[j] = False

answer = 0
left = 0
right = 0
while right <= len(prime_num):
    temp_sum = sum(prime_num[left:right])
    if temp_sum == N:
        answer += 1
        right += 1
    elif temp_sum < N:
        right += 1
    else:
        left += 1

print(answer)