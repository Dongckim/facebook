import styled, { css } from "styled-components";
import { FaFacebookF, FaFacebookMessenger, FaUserFriends } from "react-icons/fa"
import { IoMdNotifications, IoMdPerson} from "react-icons/io"
import {AiFillHome, AiOutlineYoutube} from "react-icons/ai"
import {HiUserGroup} from 'react-icons/hi'
import HeaderInput from "./HeaderInput";
import { HeaderButton, HeaderMypage } from "./HeaderButton";
import { StyledCircleButton } from "./StyledCircleButton";
import HeaderSection from "./HeaderSection";
import { useNavigate } from "react-router-dom";

const Header = ({children}) => {
    const navigate = useNavigate();
    const onClickHandler = () => {
        navigate('/')
    }

    return (
        <>
            <STdiv>
                <Aligndiv theme={'HeaderFacebook'}>
                    <HeaderButton>
                        <StyledCircleButton LargeFacebookIcon>
                            <FaFacebookF/>
                        </StyledCircleButton>
                    </HeaderButton>
                    <HeaderInput/>
                </Aligndiv>
                <Aligndiv theme={'HeaderMidSection'}>
                    <span onClick={onClickHandler}>
                        <HeaderSection>
                            <AiFillHome/>
                        </HeaderSection>
                    </span>
                    <HeaderSection>
                        <FaUserFriends/>
                    </HeaderSection>
                    <HeaderSection>
                        <AiOutlineYoutube/>
                    </HeaderSection>
                    <HeaderSection>
                        <HiUserGroup/>
                    </HeaderSection>
                </Aligndiv>
                <Aligndiv theme={'HeaderMypage'}>
                    <StyledCircleButton MediumIcon>
                        <FaFacebookMessenger/>
                    </StyledCircleButton>
                    <StyledCircleButton MediumIcon>
                        <IoMdNotifications/>
                    </StyledCircleButton>
                    <HeaderMypage>
                        <StyledCircleButton HeaderMypageButton>
                            <IoMdPerson/>
                        </StyledCircleButton>
                    </HeaderMypage>
                </Aligndiv>
            </STdiv>
            {children}
        </>  
    )
        
}

export default Header;

const STdiv = styled.div`
    background-color: #ffffff;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    box-shadow: 0 3px 4px -4px black;
    width:100vw;
    z-index: 2;
`
const Aligndiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px;
    ${({theme}) => {
    switch (theme){
        case 'HeaderFacebook':
            return css`
                margin-left:15px;
            `
        case 'HeaderMidSection':
            return css`
                margin-right: 150px;
            `
        case 'HeaderMypage':
            return css`
                margin-right: 30px;
            `
    }
}}
` 