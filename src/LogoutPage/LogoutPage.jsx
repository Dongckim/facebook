import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { getCookie } from "../api/cookie"

const LogoutPage = ({children}) => {
    const navigate = useNavigate();

    // useEffect(()=>{
    //     const token = getCookie('token')
    //     if(!token){
    //         navigate('/Mypage')
    //     }
    // },[])

    return(
        <div>
            <STdiv>
                <STimg src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"/>
                <span>Welcome to Facebook,</span>
                <span>Communicate with Facebook users from all over the world!</span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span>If you want to join us,</span>
                <span>Please Log-in first.</span>
            </STdiv>
            {children}
        </div>
        
    )
}
export default LogoutPage;

const STdiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    position: fixed;
    background-color: rgb(255,255,255, 0.8);
    height: 100vh;
    width: 100vw;
    color: rgb(66, 103, 178);
    font-size: 40px;
    font-weight: 750;
    z-index: 1;
`
const STimg = styled.img`
    width: 35vw;
    height: 40vh;
    position: relative;
    top: 50px;
`