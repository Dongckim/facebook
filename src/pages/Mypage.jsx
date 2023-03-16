import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../HeaderComponents/Header";
import { addUser } from "../redux/modules/login";
import styled from "styled-components";

const Mypage = () => {
    const dispatch = useDispatch();

    const [Id, setId] = useState('')
    const [pwd, setPwd] = useState('')


    const onIDChangeHandler = (event) => {
        const { value } = event.target;
        setId(value)
    }

    const onPWDChangeHandler = (event) => {
        const { value } = event.target;
        setPwd(value)
    }

    const onAdduser = () => {
        dispatch(addUser({
            id:Id,
            password:pwd,
        }))
    }

    useEffect(()=>{
        addUser()
        setId('')
        setPwd('')
    },[])

    return(
        <Header>
            <STdiv>
                <Wrapper>
                    <STspan>Sign Up</STspan>
                    <Stinput 
                        placeholder="아이디를 입력해주세요"
                        onChange={onIDChangeHandler}
                        value={Id}/>
                    <Stinput 
                        placeholder="비밀번호를 입력해주세요"
                        onChange={onPWDChangeHandler}
                        value={pwd}/>
                    <Button onClick={onAdduser}>회원가입</Button>
                </Wrapper>
                <Wrapper>

                </Wrapper>
            </STdiv>
        </Header>
    )
}

export default Mypage;

const STdiv = styled.div`
    display: flex;
    justify-content: center;
    gap: 100px;
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
    margin-top: 5px;
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
        background-color: #2f5bb3;
    }
`

const STspan = styled.span`
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 40px;
`