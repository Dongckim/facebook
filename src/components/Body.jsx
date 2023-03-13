import { Children } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Body = () => {
    const navigate = useNavigate();
    return (
        <STdiv> 바디입니다.
        <button onClick={()=>{
            navigate('/Mypage');
        }}>상세페이지</button>
        </STdiv>
    )
}

export default Body;

const STdiv = styled.div`
    height: 100vh;
    background-color: #e2e2e2;
    z-index: 1;
    margin-top:3px;
`