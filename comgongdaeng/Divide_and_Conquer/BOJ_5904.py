import sys
sys.setrecursionlimit(10 ** 9)

N = int(sys.stdin.readline())

# 현재 총 길이, 가운데 길이, 구하려는 순서
def getLetter(total, mid, N):
    if N <= 3:
        return "moo"[N-1]

    # s(k-1)의 길이
    left = (total - mid) // 2

    if N <= left:
        return getLetter(left, mid - 1, N)

    if N > left + mid:
        return getLetter(left, mid - 1, N - left - mid)

    if N - left == 1:
        return "m"
    else:
        return "o"

moos = 3
k = 0
while moos < N:
    # 단계에 따른 moos의 전체 길이 update
    k += 1
    moos = 2 * moos + k + 3

# 가운데 길이 = 수열 순서 + 3
print(getLetter(moos, k+3, N))