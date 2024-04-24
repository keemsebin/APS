const input = require("fs").readFileSync("/dev/stdin").toString();
function solution(input) {
  // 태그 내용 제거 함수
  const stripTags = (str) =>
    str
      .replace(/<[^>]*>/g, "")
      .replace(/\s+/g, " ")
      .trim();

  // 타이틀 추출 함수
  const extractTitle = (divTagString) => {
    const titleRegex = /title="([^"]*)"/;
    const titleMatch = divTagString.match(titleRegex);
    return titleMatch ? titleMatch[1] : "No Title";
  };

  // `<div>` 태그와 이들 내부의 `<p>` 태그들을 처리
  const processDivTags = (html) => {
    const divRegex = /<div[^>]*>(.*?)<\/div>/gs;
    const pRegex = /<p[^>]*>(.*?)<\/p>/gs;
    let match;
    const results = [];

    while ((match = divRegex.exec(html)) !== null) {
      const divTagWhole = match[0]; // 전체 <div> 태그
      const divContent = match[1]; // <div> 태그 내부 콘텐츠
      const title = extractTitle(divTagWhole); // 여기를 수정했습니다.
      let pContent = "";

      let pMatch;
      while ((pMatch = pRegex.exec(divContent)) !== null) {
        pContent += stripTags(pMatch[1]) + "\n";
      }

      results.push(`title : ${title}\n${pContent.trim()}`);
    }

    return results.join("\n");
  };

  return processDivTags(input);
}
console.log(solution(input));
