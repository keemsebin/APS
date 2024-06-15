import sys

N = int(sys.stdin.readline())
mosq = {}
# (0 ≤ TE < TX ≤ 2,100,000,000) .........!
# 시간대를 Key 로 갖는 딕셔너리를 사용?
for _ in range(N):
    i, o = map(int, sys.stdin.readline().split())
    mosq[i] = mosq.get(i, 0) + 1
    mosq[o] = mosq.get(o, 0) - 1

max_cnt = -1
max_time = [0, 0]

check = False
timeline = sorted(mosq.keys())
temp = 0

for time in timeline:
    temp += mosq[time]

    if temp > max_cnt:
        max_cnt = temp
        max_time[0] = time
        check = True
    elif temp < max_cnt and check:
        max_time[1] = time
        check = False

print(max_cnt)
print(max_time[0], max_time[1])