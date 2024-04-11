import React, {useState} from 'react';

function Test(){
    //데이터가 여러개 있는 userState
    const [myInfo, setMyInfo] = useState({
        username : '홍길동',
        tel : '010-1234-5678',
        addr : '서울시 강남구',
        email : 'abcd@naver.com'
    });

const Test1 = ()=>{
    // 함수형 선언
    
}

    //일부 데이터를 변경하고 나머지 데이터 유지하도록 처리하는 함수
    function updateInfo(){
        //연락처, 주소 수정 (이름, 이메일 유지)
        setMyInfo(previousState =>{
            // spread연산자 이용!!!!!!(... -> 배열쪼개기)
            return {...previousState, tel:'010-2222-3333', addr:'서울시 종로구'}
        });
    }

    //1개씩 변경하는 방법
    function myInfoChange(col, data){
        setMyInfo(previous=>{
            if(col==1) return {...previous, username:data};
            if(col==2) return {...previous, tel:data};
            if(col==3) return {...previous, addr:data};
            if(col==4) return {...previous, email:data};
        });
        
    }
    return (
        <div>
            <ol>
                <li>이름 : {myInfo.username}</li>
                <li>연락처 : {myInfo.tel}</li>
                <li>주소 : {myInfo.addr}</li>
                <li>이메일 : {myInfo.email}</li>
            </ol>
            {/* 데이터 중 1개만 수정할 시 나머지 데이터는 초기화된다. tel은 json안의 데이터이므로 ({안에써야된다}) */}
            <button onClick={()=>setMyInfo({tel:'010-9999-6666'})}>연락처 변경</button>
            <button onClick={()=>setMyInfo({username:'이순신', tel:'010-9999-6666', addr:'서울시 송파구', email:'ggg@nate,com'})}>모든필드  변경</button>
            {/* 기존 데이터를 보전하면서 새로운 데이터가 수정되도록 하기 */}
            <button onClick={updateInfo}>일부정보변경(기존데이터보전)</button>
            
            <h2>값을 하나씩 변경하기</h2>
            <button onClick={()=>myInfoChange(1, '세종대왕')}>이름변경</button>
            <button onClick={()=>myInfoChange(2, '010-9090-9090')}>연락처변경</button>
            <button onClick={()=>myInfoChange(3, '서울시 성동구')}>주소변경</button>
            <button onClick={()=>myInfoChange(4, 'xxyyzz@daum.net')}>이메일변경</button>
        </div>
    );
}

export default Test;