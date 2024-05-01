import sys
sys.setrecursionlimit(10**7)
N = int(sys.stdin.readline())
matrix = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]

def solution(x, y, n):
    next = n // 2
    # 재귀호출 종료 조건
    if n == 2:
        answer = [matrix[x][y], matrix[x+1][y], matrix[x][y+1], matrix[x+1][y+1]]
        answer.sort()
        return answer[-2]
    lt=solution(x, y, next)
    rt=solution(x+next, y, next)
    lb=solution(x, y+next, next)
    rb=solution(x+next, y+next, next)
    answer = [lt, rt, lb, rb]
    answer.sort()
    return answer[-2]

print(solution(0,0,N))