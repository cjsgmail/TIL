// 5/24일 TIL

// 고차 함수(higher order function)는 함수를 전달인자(argument)로 받을 수 있고 함수를 리턴할 수 있는 함수입니다.
// 다른 함수(caller)의 전달인자(argument)로 전달되는 함수를 콜백 함수(callback function)라고 합니다.
// 콜백 함수를 전달받은 고차 함수(caller)는, 함수 내부에서 이 콜백 함수를 호출(invoke)할 수 있고, 조건에 따라 콜백 함수의 실행 여부를 결정할 수도 있습니다
// '함수를 리턴하는 함수'는 커링 함수

//다른 함수를 인자로 받는 경우
function double(num) {
  return num * 2;
}

function doubleNum(func, num) {
  return func(num);
}

let output = doubleNum(double, 4);
console.log(output); // -> 8

//함수를 리턴하는 경우
function adder(added) {
  return function (num) {
    return num + added;
  };
}
let output2 = adder(5)(3); // adder(5)는 함수이므로 함수 호출 연산자 '()'를 사용할 수 있습니다.
console.log(output); // -> 8

const add3 = adder(3); // adder가 리턴하는 함수를 변수에 저장할 수 있습니다.
output = add3(2);
console.log(output); // -> 5


//함수를 인자로 받고, 함수를 리턴하는 경우
function double(num) {
  return num * 2;
}

function doubleAdder(added, func) {
  const doubled = func(added);
  return function (num) {
    return num + doubled;
  };
}

/*
 * 함수 doubleAdder는 고차 함수입니다.
 * 함수 doubleAdder의 인자 func는 함수 doubleAdder의 콜백 함수입니다.
 * 함수 double은 함수 doubleAdder의 콜백으로 전달되었습니다.
 */

// doubleAdder(5, double)는 함수이므로 함수 호출 기호 '()'를 사용할 수 있습니다.
doubleAdder(5, double)(3); // -> 13

// doubleAdder가 리턴하는 함수를 변수에 저장할 수 있습니다. (일급 객체)
const addTwice3 = doubleAdder(3, double);
addTwice3(2); // --> 8

//내장 고치 함수 개요
//filter, map, reduce

//filter
// 배열의 각 요소가
// 특정 논리(함수)에 따르면, 사실(true)일 때
// 따로 분류합니다(filter).
const isOdd = function (num) {
  return num % 2 === 1;
};

let arr = [1, 2, 3, 4, 5, 6, 7];
let output1 = arr.filter(isOdd);
console.log(output1); // -> [1, 3, 5, 7] 

//map
// 배열의 각 요소가
// 특정 논리(함수)에 의해
// 다른 요소로 지정(map) 됩니다.
const double = function (num) {
  return num * 2;
};

let arr1 = [1, 2, 3, 4, 5, 6, 7];
let output3 = arr1.map(double);
console.log(output3); // -> [2, 4, 6, 8, 10, 12, 14]

//reduce
// 배열의 각 요소를
// 특정 방법(함수)에 따라
// 원하는 하나의 형태로
// 응축합니다. (reduction)

const addAccCur = function (acc, cur) {
  return acc + cur; //acc 누적값, cur 햔재값 -> 초기값이 없으므로 누적값은 배열 arr2의 0번쨰 인덱스 값이 된다. 현재값은 다음 요소인 2
};                  //초기값이 있는 경우 누적값이 초기값으로 시작

let arr2 = [1, 2, 3, 4, 5, 6, 7];
let output4 = arr2.reduce(addAccCur);
console.log(output4); // -> 28

