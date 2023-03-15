import { AiOutlineLike } from "react-icons/ai";
import {GoComment} from "react-icons/go"
import {TbShare3} from "react-icons/tb"
import styled, { css } from "styled-components";
import { IoTrashOutline } from 'react-icons/io5'
import { BorderLine } from "./Body";
import { ProfileWrapper, Selector} from "./BodyContentHeader"
import BodyProfile from "./BodyProfile"
import BodySection from "./BodySection";
import { useDispatch, useSelector } from "react-redux";
import { deleteList, updateList } from "../redux/modules/content";
import { createContext, useContext, useState } from "react";
import UpdateInput from "./UpdateInput";

export const InputContext = createContext();

const BodyPost = ({children}) => {
    const dispatch = useDispatch();
    const { content } = useSelector((state) => state.content);
    const [input, setInput] = useState('');
    const [show, setShow] = useState(false)

    const onClickDeleteHandler = (id) => {
        dispatch(deleteList(id))
    }

    const onUpdateHandler = (id) => {
        const value = content.find((item)=>item.id == id).body
        setShow(!show)
        setInput(value)
    }

    const onSubmitUpdateHandler = (id, event) => {
        event.preventDefault();
        setShow(!show)        
        dispatch(updateList({
            id,
            body : input,
        }))
    }

    return(
        <InputContext.Provider value={{input, setInput, content}}>
            <PostWrapper>
                <Wrapper theme={'profile'}>
                    <div style={{display:"flex"}}>
                    <BodyProfile/>
                    <ProfileWrapper>
                        <span>Dongchan Alex Kim</span>
                        <Selector>2시간 전</Selector>
                    </ProfileWrapper>
                    </div>
                    <STcancel onClick={()=> {onClickDeleteHandler(children[0])}}><IoTrashOutline/></STcancel>
                </Wrapper>
                <STspan>{children[1]}</STspan>
                <BorderLine/>
                <div style={{display:"flex",marginTop:'5px'}}>
                    <BodySection><AiOutlineLike/>좋아요</BodySection>
                    <span onClick={()=>{onUpdateHandler(children[0])}}><BodySection><GoComment/>수정하기</BodySection></span>
                    <BodySection><TbShare3/>공유하기</BodySection> 
                </div>
                <BorderLine2/>
                {show ? (
                    <form onSubmit={(event)=>{onSubmitUpdateHandler(children[0], event)}}>
                    <UpdateInput>{children[0]}</UpdateInput> 
                    </form>
                ) 
                : null}
            </PostWrapper>
        </InputContext.Provider>
    )
}

export default BodyPost;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${({theme})=>{
        switch(theme){
            case 'profile':
                return css`
                    gap: 5px;
                `
        }
    }}
`

const PostWrapper = styled.div`
    display: block;
    justify-content : center;
    width : 550px;
    height : 100%;
    background-color: #ffffff;
    padding: 20px;
    margin : 20px auto 0 auto;
    border-radius : 12px;
    box-shadow : 2px 2px #d4d4d4;
`

const STspan = styled.div`  
    margin-top: 10px;
    font-size: 25px;
`
const BorderLine2 = styled.div`
    margin-top: 5px;
    border-bottom:1px solid #d0d0d0;
    width: 550px;
`

const STcancel = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 20px;
    :hover{
        background-color: #ededed;
    }
    :active{
        background-color: #d8d8d8;
    }
`