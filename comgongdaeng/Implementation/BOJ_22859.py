import re

src = input()
main = re.findall('<main>(.*)</main>', src)[0]
# [(title, 내용), (title, 내용), ...]
divs = re.findall('<div title="(.*?)">(.*?)</div>', main)

for title, paragraph in divs:
    print('title :', title)
    # p 태그 제거
    ps = re.findall('<p>(.*?)</p>', paragraph)
    for p in ps:
        # 태그 제거
        p = re.sub('(<.*?>)', '', p)
        # 공백 제거
        p = re.sub('\s+', ' ', p.strip())
        print(p)