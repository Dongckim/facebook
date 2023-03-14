import styled, { css } from "styled-components"

export const StyledCircleButton = ({ children, ...theme }) => {
    return <StButton theme={Object.keys(theme)[0]}>{children}</StButton>
}

const StButton = styled.div`
    width: 40px;
    height: 40px;

    border: none;
    border-radius: 30px;

    font-size: 18px;
    cursor: pointer;
    ${({theme}) => {
        switch (theme){
            case 'LargeFacebookIcon':
                return css`
                    font-size: 30px;
                    background-color: #4267B2;
                    color: white;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                `
            case 'MediumIcon':
                return css`
                    font-size: 18px;
                    background-color: #dfdfdf;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                `
            case 'HeaderMypageButton':
                return css`
                    font-size: 30px;
                    color: #ffffff;
                    background-color: #dfdfdf;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                `
        }
    }}
`