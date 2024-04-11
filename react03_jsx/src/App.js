import React from 'react';
import './App.css';

function App() {
  //JSX는 JavaScript Xml 의 약자이다.
  //JSX는 리액트에서 HTML태그를 쉽게 작성할 수 있도록 하는 방법이다.
  //JSX는 내용전체가 하나의 태그에 포함되어야 한다.

  //JSX를 이용하여 태그를 사용하는 방법
  const element1 = <h1>HTML은 자바스크립트에서는 문자열로 처리해야 한다.</h1>
  const element2 = (
    <ul>
        <li>첫번째 JSX테스트중</li>
        <li>오렌지</li>
        <li>오렌지</li>
    </ul>
  );
  const element3 = ( //하나의 태그로 묶여야 합니다!! 태그가 분산되면 x
    <div>
      <p>해바라기</p>
      <p>코스모스</p>
      <p>히야신스</p>
    </div>
    );
    
    //JSX를 사용하지 않고 태그를 사용하는 방법
    //  <h1 title='jsx'>JSX를 사용하지 않는 방법</h1>
    //                                //태그명, 속성들 ,          태그내의 내용
    const element4 = React.createElement('h1', {title:'jsx~~'}, 'JSX를 사용하지 않는방법')

    //변수를 이용하여 태그만들기
    const n = 100;
    let msg = "React테스트중...";

    if(n>50){
      msg = "조건에 의해 값이 변경됨";
    }
    const element5 = <p>{msg}</p>

  return (
    <div className="App">
      {element1}
      {element2}
      {element3}
      {element4}
      {element5}
    </div>
  );
}

export default App;
