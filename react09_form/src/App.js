import React, {useState} from 'react';
function App() {
  //폼의 값을 저장할 useState훅 변수
  const [member, setMember] = useState({});  //member={username:'홍', tel:'010-1234-3333', addr='강남구'}

  //폼의 입력값을 member에 저장하는 함수
  const formData = (event)=>{  //input태그에 값을 입력하면 호출() event매개변수

      //이벤트가 발생한 컴포넌트의 name속성과 value속성의 값을 얻어오기
      const fieldName = event.target.name;    //"username"
      const fieldValue = event.target.value;

      //변수에 대입
      //                                  "username":"입력한값" -> 필드명에 ""를 없애기위해 [필드명]     
      setMember(previous=>({...previous, [fieldName]:fieldValue}));

    }
    //form에서 submit이벤트가 발생하면 
    const submitHandler = (event)=>{
      //기본이벤트 제거
      event.prevent.Default();
      alert(member.username+", "+member.tel+", "+member.addr);

      //백엔드......
    }

  return (
    <div className='container'>
      <h1>react에서 폼 사용하기</h1>
      <form onSubmit={submitHandler}>
        <label>이름</label>
                                  {/* value속성의 값은 hook변수의 값으로 표시, 값이 없을 경우 '' */}
        <input type='text' name='username' value={member.username || ''}
              onChange={formData}/><br/>

        <label>연락처</label>
        <input type='text' name='tel' value={member.tel || ''}
               onChange={formData}/><br/>

        <label>주소</label>
        <input type='text' name='addr' value={member.addr || ''}
               onChange={formData}/><br/>

        <input type='submit' value='등록'/>
      </form>
    </div>
  );
}

export default App;
