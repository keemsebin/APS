import sys
sys.setrecursionlimit(10 ** 9)

def get_stars(l):
    if l == 1: return ['*']
    stars = get_stars(l // 3)
    ans = []

    for star in stars:
        ans.append(star * 3)
    for star in stars:
        ans.append(star + ' ' * (l // 3) + star)
    for star in stars:
        ans.append(star * 3)
    return ans

n = int(sys.stdin.readline())
print('\n'.join(get_stars(n)))