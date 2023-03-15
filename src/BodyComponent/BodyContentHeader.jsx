import { useContext, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";
import styled, { css } from "styled-components";
import { addList } from "../redux/modules/content";
import { openContext } from "./Body";
import BodyProfile from "./BodyProfile";


const BodyContentHeader = () => {
    const {open, setOpen, body, setBody} = useContext(openContext)
    const dispatch = useDispatch();
    
    const cancelHandler = () => {
        setOpen(!open)
    }
 
    const onChangeHandler = (event) => {
        setBody(event.target.value)
    }

    const onAddbody = () => {
        dispatch(addList({
            id:uuid(),
            body,
        }))
        setBody('')
        setOpen(!open)
        window.location.reload();
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div style={{display:'flex'}}>
                <Stdiv>
                    게시물 만들기
                </Stdiv>
                <Canceldiv onClick={cancelHandler}>X</Canceldiv>
            </div>
            <BorderLine/>
            <Wrapper theme={'profile'}>
                <BodyProfile/>
                <ProfileWrapper>
                    <span>Dongchan Alex Kim</span>
                    <Selector>전체 공개</Selector>
                </ProfileWrapper>
            </Wrapper>
            <Wrapper theme={'input'}>
                <STinput placeholder="Dongchan Alex Kim님, 무슨 생각을 하고 계신가요?"
                 onChange={onChangeHandler}
                 />
            </Wrapper>
            <Wrapper>
                <Button onClick={onAddbody}>게시</Button>
            </Wrapper>
        </form>
    )

}

export default BodyContentHeader;

const Stdiv = styled.div`
    font-weight: bold;
    font-size: 22px;
    margin: auto;
`

const Canceldiv = styled.div`
    border-radius : 30px;
    background-color: #ededed;
    color: rgb(0,0,0,0.5);
    font-weight: bold;
    width: 35px;
    height : 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    :hover{
        background-color: #d5d5d5;
    }
`
const BorderLine = styled.div`
    margin-top: 10px;
    border-bottom:1px solid #d0d0d0;
`

export const Wrapper = styled.div`
    margin: 15px;
    display: flex;
    align-items: center;
    ${({theme})=>{
        switch(theme){
            case 'profile':
                return css`
                    gap: 5px;
                `
            case 'input':
                return css`
                    justify-content: center;
                `
        }
    }}
`
export const ProfileWrapper = styled.div`
    display: block;
    font-weight: bold;
`
export const Selector = styled.div`
    background-color: #ededed;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    width: 100px;
    height: 23px;
    margin-top: 5px;
`

const STinput = styled.textarea`
    display: flex;
    justify-content: center;
    width: 100vmax;
    height: 170px;
    border: none;
    padding-top: 5px;
    font-size: 25px;
    flex-wrap: nowrap;
`

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:8px;
    width: 100vmin;
    height: 40px;
    background-color: #4267B2;
    color: #ffffff;
    cursor: pointer;
    :hover{
        background-color: #194498;
    }
`