import React, {useState }from 'react';
import './App.css';
import axios from 'axios';

function App() {
  //결과값 담을 변수
  const [message, setMessage] = useState(''); //useState 의 초기값'' 문자열로 표시

  function messageHandle(data){ //message에 setMessage(data) 셋팅!
    setMessage(data);
  }

  //스프링서버 접속하는 함수
  function springOnClick(){     //const springOnClick = ()=>
      //기본형식은 따로 있음 (https://cafe.naver.com/goguma777/2530)
      axios.get('http://localhost:9090/campus/axios/test1') //접속url, 서버에 보낼 데이터
      
      .then((response)=>{
        console.log(response);
        if(response.status=200){
          messageHandle(response.data);  //messageHandle함수에 response.data를 매개변수로 넘겨줌
        }
      }) //서버에서 응답 받은 결과처리
      
      .catch((error)=>{
        console.log(error);
      })  //서버에서 에러가 발생하여 응답을 정상적으로 받지 못했을때

  };
  //서버로 데이터 보내기
  function springOnClick2(){
    axios.post('http://localhost:9090/campus/axios/test2?num=1234&name=홍길동')
    .then((response)=>{
      console.log(response);
      messageHandle(response.data);
    })
    .catch((error)=>{
      console.log(error);
    });
  }

  return (
    <div className="App">
        <h1>결과 값 표시할 곳</h1>
        <p>{message}</p>
        <hr/>
        <button onClick={springOnClick}>axios를 이용하여 스프링서버 접속</button>
        <button onClick={springOnClick2}>axios를 이용하여 스프링서버 접속</button>
    </div>
  );
}

export default App;
