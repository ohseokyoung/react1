import logo from './logo.svg';
import './App.css';

import jeju from './img/jeju.png';
function App() {
  
  return (
    <div className="App">
      {/* 주석 : 따옴표 사용하면 안됨  return은 전체가 태그로 묶여있어야함.(div)*/}
      {/* JSX - react에는 js파일에서 html태그를 "" 로 연결안해도 가능하다! */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
            <li>React는 프론트엔드 자바스크립트 라이브러리다.</li>
            <li>유저의 행동흐름에 따라서 동적으로 화면을 보여줄 수 있다.</li>
            <li>
                <ol>
                    <li> Node설치 : node.js.org에서 안정화 버전(LTS)을 다운로드 하여 설치한다.</li>
                    <li>리액트 프로젝트를 생성해주는 create-react-app을 npm을 이용하여 install한다.
                      <p>npm install -g create-react-app</p>
                    </li>
                    <li> 해당 폴더에서 프로젝트를 생성한다
                      <p> create-react-app react00_start</p>
                    </li>
                    <li> 프로젝트 실행하기 : 해당 프로젝트로 이동하여
                      <p> npm start </p>
                    </li>

                </ol>

            </li>
        </ul>  

      </header>
      <img src={jeju} className="App-logo"/>
    </div>
  );
}

export default App;
