import { Outlet, Link } from 'react-router-dom';
import './../css/layoutStyle.css';

// npm install styled-components
// Link태그를 이용하여 원하는 스타일이 있는 태그로 생성하여 사용하기
import styled from 'styled-components';
// 스타일이 적용된 태그를 만들어 태그로 사용한다.   ``   '아님'
const StyledLink = styled(Link)`
    text-decoration:none;

    &:link, &:visited, &:active{
        color:yellow;
    }

    &:hover{
        color:red;
    }
`;

const Layout = ()=>{

    return( <div>
        {/* 메뉴 */}
        <nav>
            <ul class='Menu-layout'>
                {/* <li><Link to="/">홈페이지</Link></li>
                <li><Link to="/board">게시판</Link></li>
                <li><Link to="/notice">공지사항</Link></li>
                <li><Link to="/login">로그인</Link></li> */}

                <li><StyledLink to="/">홈페이지</StyledLink></li>
                <li><StyledLink to="/board">게시판</StyledLink></li>
                <li><StyledLink to="/notice">공지사항</StyledLink></li>
                <li><StyledLink to="/login">로그인</StyledLink></li>
            </ul>

        </nav>
        
        {/* 메뉴를 선택하면 표시할 곳  Outlet !! */}
        <Outlet/>
    </div>
    )
}

export default Layout;