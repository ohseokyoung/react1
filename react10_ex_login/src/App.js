import './App.css';
import Login from './member/Login';

function App() {
  const loginTitleStyle = {
    height:'100px',
    backgroundColor:'#04a',
    fontSize:'3em',
    textAlign:'center',
    color:'#fff',
    lineHeight:'100px'
  }
  return (
    <div>
        <div style={loginTitleStyle}>리액트로 만든 로그인 폼</div>
        {<Login/>}
    </div>
  );
}

export default App;
