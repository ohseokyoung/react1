import './App.css';

function App() {
  const style = {
    padding:'20px', 
    backgroundColor:'orange',
    color:'#fff',
    margin:'5px'
  }

  //이벤트가 발생하면 처리할 함수
  const eventTest = ()=>{
    alert("이벤트가 발생하였습니다.");
  }

  //매개변수 전달받은 함수
  const eventTest2 = (data)=>{
    alert("이벤트가 발생함......=>"+data);
  }
  //              이벤트종류, 메세지
  const eventTest3 = (ent, msg)=>{
    alert(msg + "===>"+ ent._reactName);  //_reactName에 현재 발생한 이벤트 종류가 저장되어있음.!
  }

  return (
    // javascript     jquery      react(대소문자구별) *react에서는 css도 background-color -> backgroundColor
    // onclick=""     click       onClick
    <div className="App">
        <h1>리액트에서 이벤트 처리하기</h1>
        <button style={style} onClick={eventTest}>클릭이벤트 처리하기</button>
      
      {/* 이벤트 발생시 매개변수에 데이터 전달하여 함수 호출 */}
        <button style={style} onClick={()=>eventTest2('홍길동')}>클릭(매개변수전달하여 함수호출)</button>
      
      {/* 이벤트 종류를 알아내기 */}
        <button style={style} onClick={(event)=>eventTest3(event, "event종류 알아내는 방법")}>클릭(이벤트 종류 알아내기)</button>
    </div>
  );
}

export default App;
