# 최종값은 지금까지 나온 홀수의 개수
# 어떻게 나누냐에 따라서 최종값 중 최솟값과 최댓값을..!

# 한 자리 수가 될 때까지 연산 반복
import math
n = input()

maxOdd = 0
minOdd = 999
def countOdd(num):
    count = 0
    for i in num:
        if i in '13579':
            count += 1
    return count

def solution(num, curr):
    global minOdd, maxOdd
    if len(num) == 1:
        minOdd = min(curr, minOdd)
        maxOdd = max(curr, maxOdd)
    elif len(num) == 2:
        temp = str(int(num[0]) + int(num[1]))
        solution(temp, curr + countOdd(temp))
    else:
        # 세 부분으로 나누어(brute force) 재귀적으로 호출
        for i in range(1, len(num)-1):
            for j in range(i+1, len(num)):
                first = num[:i]
                second = num[i:j]
                third = num[j:]
                temp = str(int(first) + int(second) + int(third))
                solution(temp, curr + countOdd(temp))

solution(n, countOdd(n))
print(minOdd,maxOdd)