import sys

N = int(sys.stdin.readline())
arr = [list(map(int, sys.stdin.readline().rstrip())) for _ in range(N)]
# sys.setrecursionlimit(10 ** 9)

def solution(x, y, n):
    color = arr[x][y]
    for i in range(x, x+n):
        for j in range(y, y+n):
            if color != arr[i][j]:
                color = -1
                break
    if color == -1:
        print('(', end = '')    
        n = n // 2
        solution(x, y, n)
        solution(x, y+n, n)
        solution(x+n, y, n)
        solution(x+n, y+n, n)
        print(')', end = '')
    elif color ==0:
        print(0, end = '')
    else:
        print(1, end = '')

solution(0, 0, N)