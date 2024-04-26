# 얼음파편 -> 구슬 이동 -> 연속한 구슬 파괴 -> 구슬 변화
import sys

n, m = map(int, sys.stdin.readline().split())
board = [[] for _ in range(n)]
for i in range(n):
    board[i] = list(map(int, input().split()))
blizard = [[] for _ in range(m)]
for i in range(m):
    blizard[i] = list(map(int, input().split()))
shark = [(n - 1) // 2, (n - 1) // 2]
result = [0, 0, 0]