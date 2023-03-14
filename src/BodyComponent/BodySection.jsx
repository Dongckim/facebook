import styled, { css } from "styled-components"

const BodySection = ({children,...theme}) => {
    return (
        <Stdiv>
            <STspan theme={Object.keys(theme)[0]}> {children[0]} </STspan>
            {children[1]}
        </Stdiv>
    )
}

export default BodySection

const Stdiv = styled.div`
    width: 190px;
    height: 40px;
    color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 470;
    gap: 15px;
    :hover{
        background-color: #ebebeb;
        border-radius: 10px;
        cursor: pointer;
    }
`
const STspan = styled.span`
    font-size: 23px;
    display:flex;
    align-items:center;
    ${({theme})=>{
        switch(theme){
            case 'live':
                return css`
                    color: red;
                `
            case 'album':
                return css`
                    color: #1da11d;
                `
            case 'smile':
                return css`
                    color: #f4e13d;
                `
        }
    }}
`