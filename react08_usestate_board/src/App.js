import React, {useState} from 'react';

function App() {

  const boardListStyle = {
    borderBottom : '1px solid #ddd'
  }

  // 게시판 목록 정보를 보관할 useState훅 변수 생성
  const boards = [
    {no : 1, title : '이건 제목 1', username:'홍길동', writedate:'2023-11-10 12:20'},
    {no : 2, title : '이건 제목 2', username:'김길동', writedate:'2023-11-11 12:30'},
    {no : 3, title : '이건 제목 3', username:'박길동', writedate:'2023-11-12 12:40'}
  ]
  let intValue = [];
  const [boardList, setBoardList] = useState(intValue);
  intValue.push(...boards)

  // 1씩증가  const num = 4;
  const [num, setNum] = useState(4); //useState이용 초기값4

  function handleClick(){
    //boardList에 레코드를 1개 추가하고 (기존데이터 보존-spread연산자 하고 목록추가)
    setBoardList([ ...boardList , {no:num, title:'이건 제목....'+num, username:'세종대왕', writedate:'2023-11-22 13:28'}])  //boards 는 배열안의 제이슨
    // num의 값을 1증가
    setNum(num+1);
  }
  ////////////////////////////////////////////////

  return (
    <div class='container'>
        <h1>게시판 목록</h1>

        <button className="btn btn-primary" onClick={handleClick}>글추가</button>

        <div class='row' style={boardListStyle}>
            <div className='col col-sm-1 p-3'>번호</div>
            <div className='col col-sm-6 p-3'>제목</div>
            <div className='col col-sm-2 p-3'>글쓴이</div>
            <div className='col col-sm-3 p-3'>등록일</div>
        </div>
      {
        boardList.map((board, i)=>{
          return (
            <div className='row' style={boardListStyle}>
              <div className='col col-sm-1 p-3'>{board.no}</div>
              <div className='col col-sm-6 p-3'>{board.title}</div>
              <div className='col col-sm-2 p-3'>{board.username}</div>
              <div className='col col-sm-3 p-3'>{board.writedate}</div>
        </div>
          )
        })
      }
    </div>
     
  );

}
export default App;
