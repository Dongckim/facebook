import { createContext, useState } from "react";
import styled from "styled-components";
import BodyContentHeader from "./BodyContentHeader";
import BodyModal from "./BodyModal";
import BodyProfile from "./BodyProfile";
import BodySection from "./BodySection";
import ModalContent from "./ModalContent";
import ModalLayout from "./ModalLayout";
import {BsCameraReelsFill} from 'react-icons/bs'
import {AiFillPicture} from 'react-icons/ai'
import {FaRegSmile} from 'react-icons/fa'


export const openContext = createContext();

const Body = () => {
    const [open, setOpen] = useState(false)
    console.log(open)

    return (
        <STdiv> 
            <Wrapper>
                <div style={{display:"flex"}}>
                <BodyProfile/>
                <openContext.Provider value = {{open, setOpen}}>
                    <BodyModal>
                    {open ? (
                        <ModalLayout>
                            <ModalContent>  
                                <BodyContentHeader/>
                            </ModalContent>
                        </ModalLayout>
                    ):null}
                    </BodyModal>
                </openContext.Provider>
                </div>
                <BorderLine/>
                <SectionWrapper>
                    <BodySection live><BsCameraReelsFill/>라이브 방송</BodySection>
                    <BodySection album><AiFillPicture/>사진/동영상</BodySection>
                    <BodySection smile><FaRegSmile/>기분/활동</BodySection>
                </SectionWrapper>
            </Wrapper>
            
            <Wrapper>
                게시물
            </Wrapper>
            <Wrapper>
                게시물
            </Wrapper>
            <Wrapper>
                게시물
            </Wrapper>
            <Wrapper>
                게시물
            </Wrapper>
            <Wrapper>
                게시물
            </Wrapper>
        </STdiv>
    )
}

export default Body;

const STdiv = styled.div`
    height: 100%;
    background-color: #ededf1;
    padding-top: 60px;
    padding : auto;
`

const Wrapper = styled.div`
    display: block;
    justify-content : center;
    width : 550px;
    height : 110px;
    background-color: #ffffff;
    padding: 20px;
    margin : 20px auto 0 auto;
    border-radius : 12px;
    box-shadow : 2px 2px #d4d4d4;
`
const BorderLine = styled.div`
    margin-top: 20px;
    border-bottom:1px solid #d0d0d0;
    width: 550px;
`

const SectionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
`