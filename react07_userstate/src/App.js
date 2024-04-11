// React의 useState훅을 사용하면 함수의 데이터 상태를 추정할 수 있다.
  //         useState훅으로 생성된 변수의 값이 변경되면 render된 데이터가 자동 반응한다.
  // useState훅을 사용하기 위해서는 import해야함!
import React, {useState} from 'react';
//외부파일로 되어있는 컴포넌트는import 해야함
import UseStateHookTest from './UseStateHookTest';

function App() {
  //변수
  let username = "홍길동";

  function changeUsername(n){
    username = n; 
    alert('n->' + n);
  }
  
  //  useState훅을 이용한 변수 선언
  //    변수, 값을 변경하는 함수 setColor()
  const [color, setColor] =  useState('RED');   //const color = 'RED'; (중간에 값변경 불가) -> userState훅 쓰면 갱신가능!
  const [tel, setTel] = useState('010-1234-1111');

  //컬려명 변경함수
  function changeColor(clr){
    //매개변수 clr의 값을 color대입하기
    setColor(clr); //기존 값을 버리고 새로운 값으로 변경. 훅변수의 값은 자동반응.
  }
  //연락처 변경함수
  function changeTel(tel){
    setTel(tel);
  }

  return (
    <div>
        <h1>기본으로 변수 선언한 경우</h1>
        <h2>이름 : {username}</h2>
        <button onClick={()=>changeUsername('이순신')}>이름변경하기</button>
        <hr/>
        <h1>useState문자형 변수 선언</h1>
        <h2>컬러명 : {color}, 연락처 : {tel} </h2>
        <button onClick={()=>changeColor('Blue')}>컬러명변경</button>
        <button onClick={()=>changeTel('010-7777-8888')}>연락처변경</button>
        <hr/>
       
        {/* 외부 컴퍼넌트를 사용하기 UseStateHookTest.js !!!!!*/}
        <UseStateHookTest/>

    </div>
  );
}

export default App;
