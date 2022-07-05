// 문자열내의 P와 Y의 개수
// P와 Y의 개수가 같으면 true 다르면 false

function solution(s) {
  let upS = s.toUpperCase();
  let countP = 0;
  let countY = 0;
  for (let i = 0; i < upS.length; i++) {
    if (upS[i] === "P") {
      countP++;
    } else if (upS[i] === "Y") {
      countY++;
    }
  }
  return countP === countY ? true : false;
}
