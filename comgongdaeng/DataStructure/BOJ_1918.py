exp = input()
ans = ''
st = []
for c in exp:
    if c >='A' and c<='Z' :
        ans += c
    # 우선 순위 높은 순으로 확인
    # 우선 순위가 같거나 높은 연산자가 스택에 있으면 정답 문자열에 추가
    elif c == '(':
        st.append(c)
    elif c == '*' or c == "/":
        while st and (st[-1]=='*' or st[-1]=='/'):
            ans += st.pop()
        st.append(c)
    elif c == '+' or c == '-':
        while st and st[-1] != '(':
            ans += st.pop()
        st.append(c)
    else: 
        #닫는 괄호인 경우 여는 괄호를 만날 때까지 정답 문자열에 추가
        while st and st[-1] != '(':
            ans += st.pop()
        st.pop()
while st:
    ans += st.pop()
print(ans)
