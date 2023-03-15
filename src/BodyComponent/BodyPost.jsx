import { AiOutlineLike } from "react-icons/ai";
import {GoComment} from "react-icons/go"
import {TbShare3} from "react-icons/tb"
import styled, { css } from "styled-components";
import { IoTrashOutline } from 'react-icons/io5'
import { BorderLine } from "./Body";
import { ProfileWrapper, Selector} from "./BodyContentHeader"
import BodyProfile from "./BodyProfile"
import BodySection from "./BodySection";
import { useDispatch } from "react-redux";
import { deleteList } from "../redux/modules/content";

const BodyPost = ({children}) => {
    const dispatch = useDispatch();

    const onClickDeleteHandler = (id) => {
        dispatch(deleteList(id))
        window.location.reload();
    }

    return(
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
                <BodySection><GoComment/>댓글달기</BodySection>
                <BodySection><TbShare3/>공유하기</BodySection> 
            </div>
            <BorderLine2/>
            
        </PostWrapper>
        
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