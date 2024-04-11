import './App.css';

function App() {
  // style시트를 json으로 만들어 적용하기
  // background-color -> backgroundColor, border-bottom -> borderBottom
  const css = {
    backgroundColor:'green',
    color:'#fff',
    padding:'20px',
    marginTop:'10px',
    textAlign:'center'
  }
  let val = 1234;
  return (
    <div>
      {/*json 스타일 적용 : 따옴표 있으면 안됨 */}
      <div style={css}>JSON 스타일 적용하기</div>
      <div style={{backgroundColor:'red', color:'white'}}>스타일적용</div> 
      {/* {안에 있는 {}는 json} */}

      <div>
        {/* 삼항 연산자 -> 조건문 ? 참 : 거짓 */}
        {
            1+1==2
            ? (<h1>맞습니다.</h1>)
            : (<h1>틀립니다.</h1>)
        }
      </div>
      <div>
        {/* 참일때 실행문장만 있을때 */}
        {
          1+1==2 && (<h2>참일때 실행할 문장만 있을때</h2>)
        }
      </div>

      <div>
        <h1>함수를 이용한 실행문</h1>
        {
          /*함수는 리턴해주는 값이 표시된다. 
          함수를 기술할 영역, 함수를 호출 
              ()()*/
            (
              function(){
                //val++;
                if(val==1234) return (<h1>천이백삼십사</h1>)
                if(val!=1234) {
                  var hap = 0;
                  for(var i=1; i<=10; i++){
                    hap += i;
                  }
                  return (<h1>{hap}</h1>); /*{}내에 있는 변수도 사용할 때 {}를 표기해야함! */
                }
              }
            )()
        }
      </div>
      <div>
        {
          (
            ()=>{
              if(val==1234) return (<p>람다식()=>을 이용하여 함수실행 </p>)
            }
          )()
        }
      </div>
    </div>
  );
}

export default App;
