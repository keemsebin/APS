# 1 2 3
# 4 5 6
# dp[0][0] 1을 뜯었을 때, 다음 스티커로 5를 선택할 것인가? 6을 선택할 것인가?
# dp[1][0] 4를 뜯었을 때, 다음 스티커로 2를 선택할 것인가? 3을 선택할 것인가?
# max(dp[0][0], dp[1][0])
import sys
n = int(sys.stdin.readline())
for _ in range(n):
    col = int(sys.stdin.readline())
    dp = [list(map(int, sys.stdin.readline().split())) for _ in range(2)]
    if col == 1:
        print(max(dp[0][0],dp[1][0]))
    else:
        dp[0][1] += dp[1][0]
        dp[1][1] += dp[0][0]
        for i in range(2, col):
            dp[0][i] += max(dp[1][i-1], dp[1][i-2])
            dp[1][i] += max(dp[0][i-1], dp[0][i-2])
        print(max(dp[0][col-1], dp[1][col-1]))
# 저도 모르게 이 친구가 3주차 pr에 같이 딸려가 머지까지 된 것을 너무 늦게 알아서,,
# 20, 21번째 라인 주석 추가하여 다시 커밋합니다.. :)