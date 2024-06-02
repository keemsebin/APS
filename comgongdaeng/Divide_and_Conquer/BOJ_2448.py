import sys
sys.setrecursionlimit(10 ** 9)

n = int(sys.stdin.readline())
# 공백으로 전체 배열을 선언한 뒤 *을 출력할 자리에만 '*'을 넣어줌
stars = [[' '] * 2 * n for _ in range(n)]

def get_stars(i, j, len):
    if len == 3: 
        stars[i][j] = '*'
        stars[i + 1][j - 1] = stars[i + 1][j + 1] = "*"
        for k in range(-2, 3):
            stars[i + 2][j - k] = "*"
    else: 
        newLen = len // 2
        get_stars(i, j, newLen)
        get_stars(i + newLen, j - newLen, newLen)
        get_stars(i + newLen, j + newLen, newLen)
get_stars(0, n-1, n)
for star in stars:
    print(''.join(star))