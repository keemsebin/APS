# 스택 사용
# 여는 태그를 만나기 전까지 스택에 push 했던 문자들을 pop
# 여는 태그 ~ 닫는 태그를 만나기 전까지 문자들은 그대로 append

chars = input()
st = []
ans = ''
# 여는 태그를 만났을 때 문자열 뒤집지 않기 위한 변수 선언
tag = False

for char in chars:
    if char == ' ':
        while st:
            ans += st.pop()
        ans += char
    
    elif char == '<':
        while st:
            ans += st.pop()
        ans += char
        tag = True
    elif char == '>':
        ans += char
        tag = False
    elif tag:
        ans += char
    else: st.append(char)

# 마지막으로 스택 비우기
while st:
    ans += st.pop()
print(ans)