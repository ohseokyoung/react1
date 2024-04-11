import './App.css';

function App() {
  //함수를 생성하여 호출하기
  function myFlower(f){
    return (<h1>내가 좋아하는 꽃은 {f}이다.</h1>)
  }

  // props는 자바스크립트에서 매개변수, html에서는 속성을 뜻함.
  function myFlower2(props){
    return (<h1>내가 좋아하는 꽃은 {props.flowername}이다......</h1>);
  }

  //변수에 대입후 사용하기
  const myF = (<myFlower2 flowername="장미"></myFlower2>)

  //props 매개변수로 다른 함수에 데이터 전달하기
  function MyCar(props){
    return <h2>나의 자동차는 {props.brand}입니다. </h2>
  }

  function MyCar2(props){ //brand={name:"모닝", model:"현대자동차"}
    return <h2>{props.brand.name}은 {props.brand.model}에서 생산하였습니다.</h2>
  }

  function MyChago(){
    const carName = "그랜저";
    const carInfo = {name:"모닝", model:"현대자동차"}
 
    return (
      <div>
        <h1>마이차고 ~~~~~~~</h1>
        <MyCar brand={carName}></MyCar>
        <MyCar2 brand={carInfo}></MyCar2>
      </div>
    )
  }

  // ---------------------------------------------
  return (
    <div>
      {myFlower('해바라기')}
      {(<myFlower2 flowername='해바라기'></myFlower2>)}
      {(myF)}
      {(<MyChago/>)}
    </div>
  );
}

export default App;
