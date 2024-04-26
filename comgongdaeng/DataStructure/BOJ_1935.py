import sys

#피연산자의 개수
n = int(sys.stdin.readline())
operand = []
exp= sys.stdin.readline().rstrip() #언제 사용하는지 정확히 알아보자..
#n만큼 넣기..
alphabet = []
for i in range(n):
    alphabet.append(int(sys.stdin.readline()))

for c in exp:
    if c>="A" and c<="Z":
        idx = ord(c)-ord('A')
        operand.append(alphabet[idx])
    else: 
        n2 = operand.pop()
        n1 = operand.pop()
        if c == '*':          
            operand.append(n1*n2)
        elif c == '/':
            operand.append(n1/n2)
        elif c == '+':
            operand.append(n1+n2)
        else: operand.append(n1 - n2)


print(f"{operand[0]:.2f}")
