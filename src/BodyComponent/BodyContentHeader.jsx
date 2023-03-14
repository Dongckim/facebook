import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled, { css, StyleSheetManager } from "styled-components";
import { openContext } from "./Body";
import BodyProfile from "./BodyProfile";

const BodyContentHeader = () => {
    const {open, setOpen} = useContext(openContext)
    const cancelHandler = () => {
        setOpen(!open)
    }
    return (
        <>
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
                <STinput/>
            </Wrapper>
            <Wrapper>
                <Button>게시</Button>
            </Wrapper>
        </>
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

const Wrapper = styled.div`
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
const ProfileWrapper = styled.div`
    display: block;
    font-weight: bold;
`
const Selector = styled.div`
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

const STinput = styled.input`
    display: flex;
    justify-content: center;
    width: 100vmax;
    height: 170px;
    border: none;
    text-indent: 0.5em;
    flex-wrap: wrap;
`

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:10px;
    width: 100vmin;
    height: 40px;
    background-color: #4267B2;
    color: #ffffff;
    cursor: pointer;
    :hover{
        background-color: #194498;
    }
`