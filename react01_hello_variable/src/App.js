import './App.css';

function Bye() {
  
    //var, let, const

    const user_name= "이순신";

    function myWelcome(){
      let hello = "하이!!!!";
      if(true){
        let hello = "헬로우";
        console.log(hello);
      }
      console.log(hello);
      return hello;
    }

    return(
      <div>
        <h1>리액트에서 변수 선언하기</h1>
        <h2>바로 반응하는 react(babel)</h2>
        <p>{/*          {} : 변수를 사용할때, 함수 호출할 때 */}
            웰컴페이지 : {user_name}
        </p>
        <p>
          함수 호출 : {myWelcome()}
        </p>
      </div>
  );
}

export default Bye;
