// 두 정수 사이의 합

function solution(a, b) {
  let result = 0;
  if (a === b) {
    return a;
  }
  if (a < b) {
    for (let i = a; i <= b; i++) {
      result = result + i;
    }
  } else if (b < a) {
    for (let j = b; j <= a; j++) {
      result = result + j;
    }
  }
  return result;
}
