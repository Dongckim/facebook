import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../HeaderComponents/Header";
import { __addUser, __loginUser } from "../redux/modules/login";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../api/cookie";

const Mypage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {users, error, isLogin} = useSelector(state=>state.login)

    const [Id, setId] = useState('')
    const [pwd, setPwd] = useState('')
    const [loginId, setloginId] = useState('')
    const [loginpwd, setloginPwd] = useState('')
    const [show, setShow] = useState(false)


    const onIDChangeHandler = (event) => {
        const { value } = event.target;
        setId(value)
    }

    const onPWDChangeHandler = (event) => {
        const { value } = event.target;
        setPwd(value)
    }

    const onloginIDChangeHandler = (event) => {
        const { value } = event.target;
        setloginId(value)
    }

    const onloginPWDChangeHandler = (event) => {
        const { value } = event.target;
        setloginPwd(value)
    }

    const onAdduser = () => {
        if(Id ==''||pwd == ''){
            alert('회원가입을 완료해주세요.')
        }else{
            dispatch(__addUser({
                id:Id,
                password:pwd,
            }))
        }
    }

    const onLoginUser = () => {
        dispatch(__loginUser({
            id:loginId,
            password:loginpwd
        }
        ))
        navigate('/')
    }


    // useEffect(()=>{
    //     const token = getCookie('token')
    //     if(token){
    //         navigate('/')
    //     }
    // },[])

    return(
        <Header>
            <STdiv>
                <form onSubmit={(event)=> {event.preventDefault();}}>
                    <Wrapper>
                        <STspan>로그인</STspan>
                        <Stinput 
                                placeholder="아이디"
                                onChange={onloginIDChangeHandler}
                                value={loginId}/>
                            <Stinput 
                                type={"password"}
                                placeholder="비밀번호"
                                onChange={onloginPWDChangeHandler}
                                value={loginpwd}/>
                            <Button onClick={onLoginUser}>로그인</Button> 
                            <Button 
                            theme={'new account'}
                            onClick={()=>{setShow(!show)}}>새 계정 만들기</Button>
                    </Wrapper>
                </form>
                {show ? (
                    <form onSubmit={(event)=> {event.preventDefault();}}>
                        <Wrapper>
                            <STspan>회원가입</STspan>
                            <Stinput 
                                placeholder="사용하실 아이디를 입력해주세요"
                                onChange={onIDChangeHandler}
                                value={Id}/>
                            <Stinput 
                                placeholder="사용하실 비밀번호를 입력해주세요"
                                onChange={onPWDChangeHandler}
                                value={pwd}/>
                            <Button onClick={onAdduser}>회원가입</Button>
                        </Wrapper>
                    </form>                
                ): null}
            </STdiv>
        </Header>
    )
 }

export default Mypage;

const STdiv = styled.div`
    display: flex;
    justify-content: center;
    gap: 150px;
    padding-top: 200px;
    height: 100vh;
    width: 100vw;
    background-color: #ededed;
`
const Wrapper = styled.div`
    height: 45vh;
    width: 30vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color:#ffffff;
    border-radius: 15px;
    margin-left: 5vw;
    padding-bottom: 10px;
`
const Stinput = styled.input`
    width: 25vw;
    height: 7vh;
    border-radius: 6px;
    border: 1px solid #bababa;
    margin-bottom: 10px;
    text-indent: 0.5em;
    font-size: 18px;
`

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px 0 5px 0;
    width: 25.5vw;
    height: 6vh;
    border: none;
    border-radius: 6px;
    background-color: #4267B2;
    color:#ffffff;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
    :hover{
        background-color: #2f5ebb;
    }
    :active{
        background-color: #0640b2;
        width: 24vw;
        height: 5.5vh;
        font-size: 18px;
    }
    ${({theme})=>{
        switch(theme){
            case 'new account':
                return css`
                    background-color: #1cc51c;
                    font-size: 19px;
                    :hover{
                        background-color: #18ab18;
                    }
                    :active{
                        background-color: #149214;
                        width: 9vw;
                        height:5.5vh;
                        font-size: 18px;
                    };
                    width: 10vw;
                    height: 6vh;
                `
        }
    }}
`
const STspan = styled.span`
    position: relative;
    top: 2vh;
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 40px;
`