### 리액트 기초 ###

> JSX란

`React`에서 UI를 구성할 때 사용하는 문법으로 JavaScript를 확장한 문법이다. 이 문법을 이용해서 우리는 React 엘리먼트를 만들 수 있다. <br>
`JSX`는 JavaScript가 확장된 문법이지만, 브라우저가 바로 실행할 수 있는 JavaScript 코드가 아니다. <br>
브라우저가 이해할 수 있는 JavaScript 코드로 변환을 해주어야 하는데 이때 이용하는 것이 바로 `Babel`이다 <br>

React에서는 JSX를 이용해 JavaScript 문법과 HTML 문법을 동시에 이용해 기능과 구조를 한눈에 확인할 수 있다.<br>
이렇게 구조와 동작에 대한 코드를 한 뭉치로 적은 코드셋을 **컴포넌트**라고 한다.

---
> 리액트 컴포넌트 리턴값은 하나의 JSX표현식이여야 한다 <br>
> 여기서 표현식이란?

* 자바스크립트 표현식 => 값으로 변환 가능한 코드 덩어리 => 변수에 담길 수 있는 것
* JSX 표현식 => 값으로 변환 가능한 코드 덩어리 => 변수에 담길 수 있는 것
---
JSX에서 여러 엘리먼트를 작성하고자 하는 경우, 최상위에서 opening tag와 closing tag로 감싸주어야 한다.
```html
<div>
  <div>
    <h1>Hello</h1>
  </div>
  <div>
    <h2>World</h2>
  </div>
</div>
```
React에서 CSS class 속성을 지정하려면
 "className"으로 표기해야 한다.
 

 
