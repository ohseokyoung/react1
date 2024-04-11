import './App.css';

function App() {
  //배열에 반복처리 .map()
  const myFruit = ['apple', 'banana', 'mango']

  //map()을 이용하여 출력결과 만들기 <p<apple</p> ... 람다식 함수(함수명 존재x)
  const myList = myFruit.map((item)=> <p>{item}</p> );

  //배열의 값을 변수에 대입하기
  const f1 = myFruit[0];
  const f2 = myFruit[1];
  const f3 = myFruit[2];

  //2번째 방법
  const [a1, a2, a3] = myFruit;
  const [b1,,b3] = myFruit;

  //함수를 이용한 배열처리
  function calculate(a, b){
    const add = a+b;
    const substract = a-b;
    const multiple = a*b;
    const divide = a/b;

    return [add, substract, multiple, divide];
  }

  //함수호출 -> 결과를 각각 변수에 대입
  const [plus, minus, gob, div] = calculate(10, 4);

  //배열의 분해 : ... (spread연산자)를 이용해 배열의 일부 또는 배열 전체를 다른배열이 단일값으로 빠르게 복사한다. 
  const arr1 = [10, 20, 30];
  const arr2 = [40, 50, 60];

  // arr1, arr2 를 하나의 배열로 만들기
  const arrCombind = [...arr1, ...arr2]; //[10, 20, 30, 40, 50, 60]
  
  //  1, 2은 각각의 변수에 대입, 3,4,5,6은 배열에 대입
  const num = [1,2,3,4,5,6];
  const [one, two, ...testArr] = num; 

  return (
    <div className="App">
      {myList}
      <p>f1 : {f1}, f2 : {f2}, f3 : {f3}</p>
      <p>a1 : {a1}, a2 : {a2}, a3 : {a3}</p>
      <p>b1 : {b1}, b3 : {b3}</p>
      <p>{plus}, {minus}, {gob}, {div}</p>
      <hr/>
      <p>arrCombind : {arrCombind}</p>
      <p>one : {one}, two : {two}, testarr : {testArr}</p>
    </div>
  );
}

export default App;
