import sys

n = int(sys.stdin.readline())
# 출력 값을 담을 ans, 스택으로 사용할 st 리스트
ans = []
st = []
# 오름차순으로 스택에 push 할 변수
temp = 1
# target 배열 만들기
target = []
for _ in range(n):
    target.append(int(sys.stdin.readline()))
j = 0
for i in range(n):
    while temp <= target[j]:
        ans.append('+')
        st.append(temp)
        temp += 1
    # 스택 top의 숫자와 target 숫자가 같으면 제거
    if st[-1] == target[j]:
        st.pop()
        ans.append('-')
        j += 1
    # 스택 수열을 만들 수 없다면 NO 출력 후 중단
    else:
        print("NO")
        exit(0)
for answer in ans:
    print(answer)
