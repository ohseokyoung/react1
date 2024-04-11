import React, {useState} from 'react';
//외부스타일 import
import './../css/loginStyle.css';

function Login(){
    //아이디, 비밀번호를 담을 hook변수
    const [logFormData, setLogFormData] = useState({})
    
    //아이디 입력유무, 아이디 유효성검사에 대한 에러메시지
    const [logIdErrorMessage, setLogIdErrorMessage] = useState('');
    //비밀번호 입력유무 에러메시지
    const [logPWdErrorMessage, setLogPwdErrorMessage] = useState('');

    //입력된 아이디, 비밀번호를 hook변수에 셋팅
    const loginDataChange = (event)=>{
        //새로운 아이디 또는 비번이 입력되면 기존 에러메시지 초기화
        setLogIdErrorMessage('');
        setLogPwdErrorMessage('');

        //필드명 : key
        //값 : value
        const idField  = event.target.name;
        const idValue = event.target.value;

        setLogFormData((p)=>{
            return {...p, [idField]:idValue};
        });
        console.log(logFormData);
    }
    //폼에서 submit이 발생하면 유효성 검사하기
    const loginSubmit = (event)=>{
        event.preventDefault();//기본이벤트 제거
        //아이디 입력유무 확인
        if(logFormData.userid==null || logFormData.userid==''){
            setLogIdErrorMessage('아이디를 입력하세요.');
            return false;
        }
        if(logFormData.userpwd==null || logFormData.userpwd==''){
            setLogPwdErrorMessage('비밀번호를 입력하세요');
            return false;
        }
        //정규표현식 사용하기 (6~12사이의 값 , 영대소문자, 숫자, _허용)
        const regUserid = /^[a-zA-Z0-9_]{6,13}$/;   
        if(!regUserid.test(logFormData.userid)){
            setLogIdErrorMessage("아이디는 영대소문자, 숫자, 특수문자 _만허용, 글자길이는 6~12글자");
            return false;
        }

        //비밀번호 입력유무 확인
        if(logFormData.userpwd==null || logFormData.userpwd==''){
            setLogPwdErrorMessage("비밀번호를 입력하세요.");
            return false;
        }
        //백엔드.. 비동기식
        
    }   
    return(
        <div className='loginFormCenter'>
            <h1>로그인</h1>
            <form onSubmit={loginSubmit}>
                <div className="mb-3 mt-3">
                    <label for="userid">아이디</label>
                    <input type='text' name="userid" className="form-control" id="userid" 
                    placeholder="아이디입력" value={logFormData.userid || '' }
                    onChange={loginDataChange}/>

                    <div className='errorMessage'>{logIdErrorMessage}</div>
                </div>
                    
               
                <div className="mb-3 mt-3">
                    <label for="userpwd">비밀번호</label>
                    <input type='password' name="userpwd" className="form-control" id="userpwd" 
                    placeholder="비밀번호입력" value={logFormData.userpwd || '' }
                    onChange={loginDataChange}/>

                    <div className='errorMessage'>{logPWdErrorMessage}</div>
                </div>
                <div className="d-grid gap-3">
                    {/* submit 발생
                        <input type='submit'/>, <input type='image'/>, <button>은 리액트에서 submit발생x
                    */}
                    <input type="submit" className="btn btn-secondary btn-block" value="로그인"/>
                </div>
            </form>

        </div>    
    );

}
export default Login;