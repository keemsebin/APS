import sys

N, M = map(int, sys.stdin.readline().split())
H = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]

new_input = [[0 for _ in range(N-M+1)] for _ in range(N-M+1)]

for i in range(N-M+1):
    for j in range(N-M+1):
        # 양수만 남기기 위해 -값을 저장
        new_input[i][j] = -H[i][j]

#prefix_sum
sum_ = [[0 for _ in range(N+1)] for _ in range(N+1)]
answer = [[0 for _ in range(N-M+1)] for _ in range(N-M+1)]

for i in range(N-M+1):
    for j in range(N-M+1):
        answer[i][j] = new_input[i][j] - sum_[i][j] + sum_[i+M][j] + sum_[i][j+M] - \
            sum_[i+M-1][j+M] - sum_[i+M][j+M-1] + sum_[i+M-1][j+M-1]
        sum_[i+M][j+M] = sum_[i+M-1][j+M] + sum_[i+M][j+M-1] - sum_[i+M-1][j+M-1] + answer[i][j]


for i in range(M//2):
    print("0 "* N) 
for i in range(N-M+1):
    print("0 "*(M//2) + " ".join(map(str, answer[i])) + " 0" * (M//2))
for i in range(M//2):
    print("0 "* N)