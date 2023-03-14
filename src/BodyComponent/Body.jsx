import { createContext, useState } from "react";
import styled from "styled-components";
import BodyModal from "./BodyModal";
import BodyProfile from "./BodyProfile";
import ModalContent from "./ModalContent";
import ModalLayout from "./ModalLayout";


export const openContext = createContext();

const Body = () => {
    const [open, setOpen] = useState(false)
    console.log(open)

    return (
        <STdiv> 
            <Wrapper>
                <BodyProfile/>
                <openContext.Provider value = {{open, setOpen}}>
                    <BodyModal>
                    {open ? (
                        <ModalLayout>
                            <ModalContent>
                                김동찬입니다.
                            </ModalContent>
                        </ModalLayout>
                    ):null}
                    </BodyModal>
                </openContext.Provider>
                
                
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
    display: flex;
    justify-content : center;
    width : 550px;
    height : 120px;
    background-color: #ffffff;
    padding: 20px;
    
    margin : 20px auto 0 auto;
    
    border-radius : 12px;
    box-shadow : 2px 2px #d4d4d4;
`