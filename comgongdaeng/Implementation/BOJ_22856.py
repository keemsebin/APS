# 이진 트리 -> 배열? 트리?
# 왼쪽 자식이 있다면 방문 / 오른쪽 자식이 있다면 방문 / # 부모가 있다면 방문 +1
# 마지막 노드인 경우 +1 하지 않음
import sys
sys.setrecursionlimit(10**7)
n = int(sys.stdin.readline())
tree=  [[] for _ in range(n+1)]

for i in range(n):
    root, left, right = list(map(int, sys.stdin.readline().split()))
    if left == -1: left = 0
    if right == -1: right = 0
    tree[root].append(left)
    tree[root].append(right)

inOrder = []
def in_order(node):
    if tree[node][0]:
        in_order(tree[node][0])
    inOrder.append(node)
    if tree[node][1]:
        in_order(tree[node][1])

def sim_in_order(node):
    global cnt
    global ans
    if node == inOrder[-1]:
        ans = cnt
    if tree[node][0]:
        cnt += 1
        sim_in_order(tree[node][0])
        cnt += 1
        if node == inOrder[-1]:
            ans = cnt
    if tree[node][1]:
        cnt += 1
        sim_in_order(tree[node][1])
        cnt += 1

cnt = 0
in_order(1)
ans = 0
sim_in_order(1)
print(ans)